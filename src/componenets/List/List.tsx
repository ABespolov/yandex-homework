import React, {useState} from "react";
import {ListItem} from "../ListItem";
import styles from "./List.module.css";

interface List {
  text: string;
  color: string;
  items: Array<{
    checked: boolean;
    text: string
  }>;
}

export const List: React.FC<List> = ({text, color, items}) => {
  const [listItem, setListItem] = useState(items);
  const getItems = (isChecked: boolean) => {
    return listItem.filter((item) => item.checked === isChecked)
      .map((item, index) =>
        <li><ListItem item={items[index]} isChecked={item.checked}/></li>,
      );
  };
  return (
    <>
      <div className={styles.listWrapper} style={{backgroundColor: color}}>
        <p>{text}</p>
        <ul className={styles.list}>
          {getItems(false)}
        </ul>
      </div>
      <div>
        <ul className={styles.checkedList}>
          {getItems(true)}
        </ul>
      </div>
    </>
  );
};
