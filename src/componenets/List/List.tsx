import React, {useState} from "react";
import {ListItem} from "../ListItem";
import styles from "./List.module.scss";

interface List {
  update: any;
  text?: string;
  color?: string;
  items?: Array<{
    checked: boolean;
    text: string
  }>;
}

export const List: React.FC<List> = ({update, text, color, items}) => {
  const [listItem, setListItem] = useState(items);
  const check = (e: React.MouseEvent<HTMLLIElement>, txt: string) => {
    e.preventDefault();
    const newItems = listItem && [...listItem];
    newItems && newItems.forEach((item) => {
      if (item.text.localeCompare(txt) === 0) {
        item.checked = !item.checked;
      }
    });
    setListItem(newItems);
    update(newItems);
  };
  const getItems = (isChecked: boolean) => {
    return listItem && listItem.filter((item) => item.checked === isChecked)
      .map((item, index) =>
        <li key={index} onClick={(e) => check(e, item.text)}><ListItem item={item} isChecked={item.checked}/></li>,
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
