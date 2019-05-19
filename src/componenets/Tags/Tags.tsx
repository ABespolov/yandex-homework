import React from "react";
import styles from "./Tags.module.scss";

export interface TagsInterface {
  tags?: Array<{
    tag: string,
  }>;
}

export const Tags: React.FC<TagsInterface> = ({tags}) => {
  const currentTags = tags && tags.map((item, index) =>
      <span key={index} className={styles.tag}>{item.tag}</span>);
  return (
    <div className={styles.tags}>
      {currentTags}
    </div>
  );
};
