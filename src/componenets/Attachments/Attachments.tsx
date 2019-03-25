import React from "react";
import linkIcon from "../../icons/link.svg";
import imageIcon from "../../icons/picture.svg";
import styles from "./Attachments.module.scss";

interface Attachments {
  attachments: Array<{
    type: string;
    url: string;
  }>;
}

export const Attachments: React.FC<Attachments> = ({attachments}) => {
  const links = attachments && attachments.filter((item) => item.type === "link");
  const images = attachments && attachments.filter((item) => item.type === "image");
  const lnk = links && links.map((item) => (
    <div className={styles.linkAttachment}>
      <img className={styles.linkIcon} src={linkIcon} alt=""/>
      <span>{item.url.replace(/(^.+\/\/)|(\/.+)/g, "")}</span>
    </div>
  ));
  const img = images && images.map((item) => (
    <div className={styles.attachment}>
      <img src={item.url} alt=""/>
    </div>
  ));
  return (
    <div className={styles.attachments}>
      {img.length > 0 ?
        <div className={styles.images}>
          <img src={imageIcon} alt=""/>
          <div className={styles.imageAttachment}>
            {img}
          </div>
        </div>
        : null}
      {lnk}
    </div>
  );
};
