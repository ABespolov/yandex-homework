import React from "react";
import styles from "./Attachments.module.css";
import linkIcon from "../../icons/link.svg";
import imageIcon from "../../icons/picture.svg";

interface Attachments {
  attachments: {
    type: string;
    url: string;
  }[]
}

export const Attachments: React.FC<Attachments> = ({attachments}) => {
  let links = attachments && attachments.filter(item => item.type === 'link');
  let images = attachments && attachments.filter(item => item.type === 'image');
  const lnk = links && links.map(item => (
    <div className={styles.attachment}>
      <img src={linkIcon} alt=""/>
      <span>{item.url}</span>
    </div>
  ));
  const img = images && images.map(item => (
    <div className={styles.attachment}>
      <img src={item.url} alt=""/>
    </div>
  ));
  return (
    <div className={`${styles.attachments} ${img.length > 0 ? styles.imageAttachment : ''}`}>
      {img.length > 0 ? <img src={imageIcon} alt=""/> : null}
      {lnk}
      {img}
    </div>
  );
};
