import React, {useEffect, useState} from "react";
import {getCards} from "../../redux-hooks/actions";
import {useReduxDispatch, useReduxState} from "../../redux-hooks/redux-hooks";
import data from "../data.json";
import {Filter} from "../Filter";
import {Footer} from "../Footer";
import {Header} from "../Header";
import {Note} from "../Note";
import styles from "./App.module.scss";

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
    };
}

interface Attachment {
    type: string;
    url: string;
}

interface Item {
    text: string;
    checked: boolean;
}

export const App = () => {
    const state = useReduxState();
    const dispatch = useReduxDispatch();

    useEffect(() => {
        if (!Object.keys(state.cards).length) {
            getCards(dispatch);
        }
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <Header/>
                <div className={styles.content}>
                    <Filter colors={data.colors}/>
                    <div className={styles.notesWrapper}>
                        {Object.keys(state.cards).length ?
                            state.cards.map((item: NoteData, index: number) => {
                                return <Note key={index} noteData={item}/>;
                            }) : null}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
