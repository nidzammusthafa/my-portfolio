/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "@notionhq/client";
import type { Post, Heading } from "@/types";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

const databaseId = process.env.NOTION_DATABASE_ID || "";

const pageToPost = (page: any): Post => {
  let coverImage: string | undefined = undefined;
  if (page.cover) {
    coverImage = page.cover.external?.url || page.cover.file?.url;
  }

  const title = page.properties.title?.title[0]?.plain_text || "";
  const slug = page.properties.slug?.rich_text[0]?.plain_text || slugify(title);

  return {
    slug: slug,
    title: title,
    date: page.properties.published?.date?.start || "",
    excerpt: page.properties.summary?.rich_text[0]?.plain_text || "",
    content: "",
    coverImage: coverImage,
    tags: page.properties.tags?.multi_select || [],
    category: page.properties.category?.multi_select || [],
    headings: [], // Headings will be populated later
  };
};

export const getPublishedBlogPosts = async (): Promise<Post[]> => {
  try {
    const database: any = await notion.databases.retrieve({
      database_id: databaseId, // This is already the database ID
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
      database_id: databaseId, // This is already the database ID
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

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "")
    .replace(/--+/g, "-");
};

const renderRichText = (richTextArray: any[]): string => {
  return richTextArray
    .map((textSegment) => {
      let text = textSegment.plain_text;
      if (textSegment.annotations.bold) text = `<strong>${text}</strong>`;
      if (textSegment.annotations.italic) text = `<em>${text}</em>`;
      if (textSegment.annotations.code)
        text = `<code class="rounded bg-light-navy/50 px-1 py-0.5 font-mono text-sm">${text}</code>`;
      if (textSegment.annotations.strikethrough) text = `<s>${text}</s>`;
      if (textSegment.annotations.underline) text = `<u>${text}</u>`;
      if (textSegment.href)
        text = `<a href="${textSegment.href}" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">${text}</a>`;
      return text;
    })
    .join("");
};

const renderBlock = (block: any, headings: Heading[]): string => {
  const getHeaderText = (richText: any[]) =>
    richText.map((t) => t.plain_text).join("");

  switch (block.type) {
    case "heading_1":
    case "heading_2":
    case "heading_3":
      const level = parseInt(block.type.split("_")[1]);
      const richText = block[block.type].rich_text;
      const text = getHeaderText(richText);
      const id = slugify(text);
      headings.push({ level, text, id });
      return `<h${level} id="${id}">${renderRichText(richText)}</h${level}>`;
    case "paragraph":
      if (block.paragraph.rich_text.length === 0) return "<br />";
      return `<p>${renderRichText(block.paragraph.rich_text)}</p>`;
    case "code":
      const language = block.code.language || "javascript";
      return `<pre><code class="language-${language}">${renderRichText(
        block.code.rich_text
      )}</code></pre>`;
    case "video":
      if (block.video.type === "external") {
        const url = block.video.external.url;
        if (url.includes("youtube.com/watch")) {
          const embedUrl = url.replace("watch?v=", "embed/");
          return `<div class="aspect-w-16 aspect-h-9"><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
        }
        return `<video controls src="${url}"></video>`;
      }
      return `<video controls src="${block.video.file.url}"></video>`;
    case "audio":
      if (block.audio.type === "external") {
        return `<audio controls src="${block.audio.external.url}"></audio>`;
      }
      return `<audio controls src="${block.audio.file.url}"></audio>`;
    case "bulleted_list_item":
      return `<li>${renderRichText(block.bulleted_list_item.rich_text)}</li>`;
    case "numbered_list_item":
      return `<li>${renderRichText(block.numbered_list_item.rich_text)}</li>`;
    default:
      return "";
  }
};

export const getSingleBlogPost = async (
  slugOrId: string
): Promise<{ post: Post; headings: Heading[] } | null> => {
  try {
    const database: any = await notion.databases.retrieve({
      database_id: databaseId, // This is already the database ID
    });

    const dataSourceId = database.data_sources[0].id;
    let page: any;
    if (isNotionId(slugOrId)) {
      page = await notion.pages.retrieve({ page_id: slugOrId });
    } else {
      const response = await notion.dataSources.query({
        data_source_id: dataSourceId,
        filter: { property: "slug", rich_text: { equals: slugOrId } },
      });
      if (response.results.length === 0) return null;
      page = response.results[0];
    }

    if (!page) return null;

    const post = pageToPost(page);
    const blocksResponse = await notion.blocks.children.list({
      block_id: page.id,
    });

    const headings: Heading[] = [];
    post.content = blocksResponse.results
      .map((block) => renderBlock(block, headings))
      .join("");
    post.headings = headings;

    return { post, headings };
  } catch (error) {
    console.error(
      `Error fetching single blog post for slug: ${slugOrId}`,
      error
    );
    return null;
  }
};
