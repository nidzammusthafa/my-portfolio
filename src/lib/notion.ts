/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import type { Post } from "@/types";
import { ExtendedRecordMap } from "notion-types";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const notionUnofficial = new NotionAPI();

const databaseId = process.env.NOTION_DATABASE_ID || "";

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[&/\\#,+()$~%.'\":*?<>{}]/g, "")
    .replace(/--+/g, "-");
};

const pageToPost = (page: any): Post => {
  let coverImage: string | undefined = undefined;
  if (page.cover) {
    coverImage = page.cover.external?.url || page.cover.file?.url;
  }

  const title = page.properties.title?.title[0]?.plain_text || "";
  const slug = page.properties.slug?.rich_text[0]?.plain_text || slugify(title);
  const author = page.properties.author?.people[0] || null;

  return {
    slug: slug,
    title: title,
    date: page.properties.published?.date?.start || "",
    excerpt: page.properties.summary?.rich_text[0]?.plain_text || "",
    content: "", // content will be from recordMap
    coverImage: coverImage,
    tags: page.properties.tags?.multi_select || [],
    category: page.properties.category?.multi_select || [],
    author: author,
  };
};

export const getPublishedBlogPosts = async (): Promise<Post[]> => {
  try {
    const database: any = await notion.databases.retrieve({
      database_id: databaseId,
    });
    const dataSourceId = database.data_sources[0].id;
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Public",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "published",
          direction: "descending",
        },
      ],
    });
    return response.results.map(pageToPost);
  } catch (error) {
    console.error("Error fetching blog posts from Notion:", error);
    return [];
  }
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
  try {
    const database: any = await notion.databases.retrieve({
      database_id: databaseId,
    });
    const dataSourceId = database.data_sources[0].id;
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        and: [
          {
            property: "Public",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Featured",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: "published",
          direction: "descending",
        },
      ],
    });
    return response.results.map(pageToPost);
  } catch (error) {
    console.error("Error fetching featured posts from Notion:", error);
    return [];
  }
};

const isNotionId = (str: string) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    str
  );
};

export const getSingleBlogPost = async (
  slugOrId: string
): Promise<{ post: Post; recordMap: ExtendedRecordMap } | null> => {
  try {
    let pageId = "";
    let postData: any;

    if (isNotionId(slugOrId)) {
      pageId = slugOrId;
    } else {
      const database: any = await notion.databases.retrieve({
        database_id: databaseId,
      });
      const dataSourceId = database.data_sources[0].id;
      const response = await notion.dataSources.query({
        data_source_id: dataSourceId,
        filter: {
          property: "slug",
          rich_text: {
            equals: slugOrId,
          },
        },
      });
      if (response.results.length === 0) return null;
      postData = response.results[0];
      pageId = postData.id;
    }

    if (!postData) {
      postData = await notion.pages.retrieve({ page_id: pageId });
    }

    const post = pageToPost(postData);
    const recordMap = await notionUnofficial.getPage(pageId);

    return { post, recordMap };
  } catch (error) {
    console.error(
      `Error fetching single blog post for slug: ${slugOrId}`,
      error
    );
    return null;
  }
};
