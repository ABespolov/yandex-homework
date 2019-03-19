import React, {useEffect, useRef} from "react";
import {List} from "../List";
import {Tags} from "../Tags";
import {CurrentDate} from "../CurrentDate";
import {Attachments} from "../Attachments";
import styles from "./Note.module.css";
// @ts-ignore
export const Note = ({color, size, title, text, type, items, tags, tagsList, created, attachments}) => {
  const note = useRef(null);
  // @ts-ignore

  useEffect(() => {
    const minHeight = 162;
    // @ts-ignore
    let rows = Math.round(note.current.offsetHeight / minHeight);
    if (rows > 3) {
      rows = 3;
    }
    // @ts-ignore
    note.current.style.gridRow = `span ${rows}`;
  }, []);
  let stl = {};
  if(attachments) {
    stl = {
      backgroundColor: '#e6e6e6',
    };
  }else{
    stl = {
      backgroundColor: color,
    };
  }
  return (
    <div ref={note} style={type !== "list" ? stl : {backgroundColor: '#fff'}} className={`${styles.note} ${styles[`size-${size}`]}`}>
      <div style={type !== "list" ? {backgroundColor: color} : {}} className={styles.wrapper}>
      <div className={styles.content}>
        {type === "list" ? <List text={title} items={items} color={color}/> :
          <div className={styles.title}>{title}</div>}
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.footer}>
        <Tags tags={tags} tagsList={tagsList}/>
        <CurrentDate created={created}/>
      </div>
      </div>
      {attachments ? <Attachments attachments={attachments}/> : null}
    </div>
  );
};
