import React, {useLayoutEffect, useRef, useState} from "react";
import {Attachments} from "../Attachments";
import {CurrentDate} from "../CurrentDate";
import {Edit} from "../Edit";
import {List} from "../List";
import {Tags} from "../Tags";
import {Warning} from "../Warning";
import styles from "./Note.module.scss";

export interface NoteInterface {
  color: any;
  size: string;
  title?: string;
  text?: string;
  type: string;
  created: number;
  reminder?: number;
  url?: string;
  tags: Array<{
    id: number,
    tag: string,
  }>;
  attachments?: Array<{
    type: string,
    url: string,
  }>;
  items: Array<{
    text: string,
    checked: boolean,
  }>;
}

export const Note: React.FC<NoteInterface> =
  ({color, size, title, text, type, items, tags, created, attachments, reminder, url}) => {
    const note = useRef(null);
    const [updateHeight, setUpdateHeight] = useState("false");
    const getStyle = () => {
      if (type !== "list" && attachments) {
            return {backgroundColor: "#e6e6e6"};
      } else {
        if (type === "list") { return  {backgroundColor: "#fff"}; }
        return attachments ? {backgroundColor: color} : {backgroundColor: "#fff"};
      }
    };
    useLayoutEffect(() => {
      // @ts-ignore
      note.current.style.gridRow = `span 1`;
      const minHeight = 160;
      // @ts-ignore
      let rows = Math.floor(note.current.offsetHeight / minHeight);
      if (rows > 3) {
        rows = 3;
      }
      // @ts-ignore
      note.current.style.gridRow = `span ${rows}`;
    }, [updateHeight]);
    return (
      <div ref={note} style={getStyle()} className={`${styles.note} ${styles[`size-${size}`]}`}>
        {type === "image" ? <img className={styles.fullImage} src={url} alt=""/> : null}
        {reminder ? <Warning reminder={reminder}/> : null}
        <div className={`${styles.contentWrapper} ${reminder ? styles.contentWrapperReminder : ""}`}>
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
              <Tags tags={tags}/>
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
