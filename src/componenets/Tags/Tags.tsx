import React from "react";
import styles from "./Tags.module.scss";

export interface TagsInterface {
  tags: Array<{
    id: number,
    tag: string,
  }>;
}

export const Tags: React.FC<TagsInterface> = ({tags}) => {
  const currentTags = tags && tags.map((item) => <span className={styles.tag}>{item.tag}</span>);
  return (
    <div className={styles.tags}>
      {currentTags}
    </div>
  );
};
