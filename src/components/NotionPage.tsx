"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { ExtendedRecordMap } from "notion-types";
import { NotionCodeWrapper } from "./notion/NotionCodeWrapper";

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
}

export const NotionPage = ({ recordMap }: NotionPageProps) => {
  if (!recordMap) {
    return null;
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={true}
      className="notion-container"
      components={{
        Code: NotionCodeWrapper,
      }}
    />
  );
};
