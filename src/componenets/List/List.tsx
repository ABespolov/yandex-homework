import React, {useState} from "react";
import {ListItem} from "../ListItem";
import styles from "./List.module.css";

interface List {
  update: any;
  text: string;
  color: string;
  items: Array<{
    checked: boolean;
    text: string
  }>;
}

export const List: React.FC<List> = ({update, text, color, items}) => {
  const [listItem, setListItem] = useState(items);
  const check = (txt: string) => {
    const newItems = [...listItem];
    newItems.forEach((item) => {
      if (item.text === txt) {
        item.checked = !item.checked;
      }
    });
    setListItem(newItems);
    update(txt);
  };
  const getItems = (isChecked: boolean) => {
    return listItem.filter((item) => item.checked === isChecked)
      .map((item, index) =>
        <li onClick={() => check(item.text)}><ListItem item={items[index]} isChecked={item.checked}/></li>,
      );
  };
  return (
    <>
      <div className={styles.listWrapper} style={{backgroundColor: color}}>
        <p className={styles.listHeader}>{text}</p>
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
