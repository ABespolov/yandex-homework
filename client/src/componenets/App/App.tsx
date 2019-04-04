import React from "react";
import data from "../data.json";
import {Filter} from "../Filter";
import {Footer} from "../Footer";
import {Header} from "../Header";
import {Note} from "../Note";
import styles from "./App.module.scss";
import {NoteData} from "./Notes";
import {Notes} from "./Notes";

const getColor = (note: NoteData) => {
    const colorObject = data.colors.find((item) => item.id === note.color);
    return colorObject ? colorObject.color : "#fff";
};

const getTags = (note: NoteData) => {
    const tagsList = data.tags.filter((item) =>
        note.tags && note.tags.some((num) => num === item.id));
    return tagsList;
};

const getData = async () => {
    const response = await fetch("/ping");

    const body = await response.text();
    // console.log(body);

    // if (response.status !== 200) throw Error(body.message);

    return body;
};

export const App = () => {
    const nts = new Notes();
    getData();

    Notes.factory(nts, data.notes);

    const notes = nts.map((item, index) => {
        index = index || 0;
        return <Note
            key={item && item.data.created}
            color={getColor(data.notes[index])}
            size={item && item.data.size}
            title={item && item.data.title}
            text={item && item.data.text}
            type={item && item.data.type}
            tags={getTags(data.notes[index])}
            items={item && item.data.items}
            created={item && item.data.created}
            attachments={item && item.data.attachments}
            reminder={item && item.data.reminder}
            url={item && item.data.url}
        />;
    });
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
