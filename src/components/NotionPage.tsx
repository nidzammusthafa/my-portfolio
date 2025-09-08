'use client';

import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { ExtendedRecordMap } from 'notion-types';

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
        Code: Code,
      }}
    />
  );
};