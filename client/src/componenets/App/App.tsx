import React, {useEffect, useState} from "react";
import data from "../data.json";
import {Filter} from "../Filter";
import {Footer} from "../Footer";
import {Header} from "../Header";
import {Note} from "../Note";
import styles from "./App.module.scss";
import axios from 'axios';

export interface NoteData {
    currentData: {
        type: string;
        title?: string;
        tags?: Array<{
            tag: string,
        }>;
        color?: string;
        items?: Item[];
        size: string;
        created: number;
        text?: string;
        attachments?: Attachment[];
        reminder?: number;
        url?: string;
    }
}

interface Attachment {
    type: string;
    url: string;
}

interface Item {
    text: string;
    checked: boolean;
}


const getData = async () => {
    const response = await axios.get("/api/cards");
    return response.data;
};

export const App = () => {
    const [notes, setNotes] = useState();
    useEffect(() => {
        getData().then((nts: NoteData[]) => {
            const notes = nts.map((item: NoteData) => {
                return <Note
                    key={item && item.currentData.created}
                    color={item && item.currentData.color}
                    size={item && item.currentData.size}
                    title={item && item.currentData.title}
                    text={item && item.currentData.text}
                    type={item && item.currentData.type}
                    tags={item && item.currentData.tags}
                    items={item && item.currentData.items}
                    created={item && item.currentData.created}
                    attachments={item && item.currentData.attachments}
                    reminder={item && item.currentData.reminder}
                    url={item && item.currentData.url}
                />;
            });
            setNotes(notes);
        });
    }, []);
    return (
        <>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.content}>
                    <Filter colors={data.colors}/>
                    <div className={styles.notesWrapper}>{notes}</div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
