import React, {useEffect, useRef} from "react";
import styles from "./Tags.module.css";

interface Tags {
  tags: string[];
  tagsList: string[];
}

export const Tags: React.FC<Tags> = ({tags, tagsList}) => {
  // @ts-ignore
  const currentTags = tags && tags.map((item) => <span className={styles.tag}>{tagsList[item].tag}</span>);
  return (
    <div className={styles.tags}>
      {currentTags}
    </div>
  );
};
