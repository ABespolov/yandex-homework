import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.name}>Вася Пупкин</div>
      <div className={styles.logo}>© Яндекс ШРИ</div>
    </div>
  );
};
