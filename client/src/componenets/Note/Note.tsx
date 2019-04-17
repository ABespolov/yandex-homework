import React, {createRef, useLayoutEffect, useRef, useState} from "react";
import {Attachments} from "../Attachments";
import {CurrentDate} from "../CurrentDate";
import {Edit} from "../Edit";
import {List} from "../List";
import {Tags} from "../Tags";
import {Warning} from "../Warning";
import styles from "./Note.module.scss";
import {useReduxState} from "../../redux-hooks/redux-hooks";

export interface NoteInterface {
    noteData:{
        currentData: {
            color?: string;
            size?: string;
            title?: string;
            text?: string;
            type?: string;
            created: number;
            reminder?: number;
            url?: string;
            tags?: Array<{
                tag: string,
            }>;
            attachments?: Array<{
                type: string,
                url: string,
            }>;
            items?: Array<{
                text: string,
                checked: boolean,
            }>;
        }
    }
}

export const Note: React.FC<NoteInterface> =
    ({noteData}) => {
        const {color, size, title, text, type, items, tags,
            created, attachments, reminder, url} = noteData.currentData;
        const state = useReduxState();
        const note: React.RefObject<HTMLInputElement> = createRef();
        const [updateHeight, setUpdateHeight] = useState("false");
        const getStyle = () => {
            if (type !== "list" && attachments) {
                return {backgroundColor: "#e6e6e6"};
            } else {
                if (type === "list") {
                    return {backgroundColor: "#fff"};
                }
                return attachments ? {backgroundColor: color} : {backgroundColor: "#fff"};
            }
        };
        useLayoutEffect(() => {
            if (note !== null && note.current !== null) {
                note.current.style.gridRow = `span 1`;
                const minHeight = 160;
                let rows = Math.floor(note.current.offsetHeight / minHeight);
                if (rows > 3) {
                    rows = 3;
                }
                note.current.style.gridRow = `span ${rows}`;
            }
        }, [updateHeight, state.cards]);
        return (
            <div ref={note} style={getStyle()} className={`${styles.note} ${styles[`size-${size}`]}`}>
                {type === "image" ?
                    <img style={{minHeight: "220px"}} className={styles.fullImage} src={url} alt=""/> : null}
                {reminder ? <Warning reminder={reminder}/> : null}
                <div className={`${styles.contentWrapper} ${reminder ? styles.contentWrapperReminder : ""}`}>
                    <div style={type !== "list" ? {backgroundColor: color} : {}} className={styles.wrapper}>
                        <div className={styles.content}>
                            {type === "list" ?
                                <List update={setUpdateHeight} text={title} items={items} color={color}/> :
                                <div className={styles.title}>{title}</div>}
                            {text ? <div className={styles.text}>{
                                text && text.split("\n").map((item, index) => {
                                    return <div key={index}>{item}</div>;
                                })}</div> : null}
                        </div>
                        <div className={styles.footer}>
                            <Tags tags={tags}/>
                            <div className={styles.footerWrapper}>
                                <div className={styles.edit}>
                                    <Edit id={created}/>
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
