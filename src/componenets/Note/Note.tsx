import React, {useLayoutEffect, useRef, useState} from "react";
import {Attachments} from "../Attachments";
import {CurrentDate} from "../CurrentDate";
import {Edit} from "../Edit";
import {List} from "../List";
import {Tags} from "../Tags";
import {Warning} from "../Warning";
import styles from "./Note.module.css";
// @ts-ignore
export const Note = ({color, size, title, text, type, items, tags, tagsList, created, attachments, reminder, url}) => {
  const note = useRef(null);
  const [updateHeight, setUpdateHeight] = useState("false");
  // @ts-ignore

  useLayoutEffect(() => {
    // @ts-ignore
    note.current.style.gridRow = `span 1`;
    // @ts-ignore
    note.current.style.gridAutoRows = `auto`;
    const minHeight = 160;

    // @ts-ignore
    let rows = Math.floor(note.current.offsetHeight / minHeight);
    if (rows > 3) {
      rows = 3;
    }
    // @ts-ignore
    note.current.style.gridRow = `span ${rows}`;

  }, [updateHeight]);
  let stl = {};
  if (attachments) {
    stl = {
      backgroundColor: "#e6e6e6",
    };
  } else {
    stl = {
      backgroundColor: color,
    };
  }
  return (
    <div ref={note} style={type !== "list" ? stl : {backgroundColor: "#fff"}}
         className={`${styles.note} ${styles[`size-${size}`]}`}>
      {type === "image" ? <img className={styles.fullImage} src={url} alt=""/> : null}
      {reminder ? <Warning reminder={reminder}/> : null}
      <div className={reminder ? styles.contentWrapperRed : styles.contentWrapper}>
        <div style={type !== "list" ? {backgroundColor: color} : {}} className={styles.wrapper}>
          <div className={styles.content}>
            {type === "list" ? <List update={setUpdateHeight} text={title} items={items} color={color}/> :
              <div className={styles.title}>{title}</div>}
            {text ? <div className={styles.text}>{
              text && text.split("\n").map((item: string) => {
                return <div>{item}</div>;
              })}</div> : null}
          </div>
          <div className={styles.footer}>
            <Tags tags={tags} tagsList={tagsList}/>
            <div className={styles.footerWrapper}>
              <div className={styles.edit}>
              <Edit/>
              </div>
              <CurrentDate created={created}/>
            </div>
          </div>
        </div>
      </div>
      {attachments ? <Attachments attachments={attachments}/> : null}
    </div>
  );
};
