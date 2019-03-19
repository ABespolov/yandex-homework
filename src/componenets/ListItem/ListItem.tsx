import React from "react";
import styles from "./ListItem.module.css";

interface Items {
  text: string;
  checked: boolean;
}

interface ListItem {
  item: Items;
  isChecked: boolean;
}

export const ListItem: React.FC<ListItem> = ({ item, isChecked }) => {
  return (
    <label htmlFor={item.text} className={`${styles.container} ${isChecked ? styles.checked : ""}`}>
      {item.text}
      <input id={item.text} type="checkbox"/>
      <span className={styles.checkmark} />
    </label>
  );
};
