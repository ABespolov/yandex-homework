import React, {useEffect, useState} from "react";
import {addCard} from "../../redux-hooks/actions";
import {useReduxDispatch} from "../../redux-hooks/redux-hooks";
import styles from "./NoteForm.module.scss";

interface NoteFormProps {
    showForm(state: boolean): void;
}

export const NoteForm: React.FC<NoteFormProps> = ({showForm}) => {
    const [header, setHeader] = useState("");
    const [text, setText] = useState("");
    const dispatch = useReduxDispatch();
    const onSubmit = (e: any) => {
        const note = {
            type: "text",
            title: header,
            text,
            color: 0,
            size: "s",
            created: Date.now(),
        };
        addCard(dispatch, note);
        e.preventDefault();
    };
    const disableScroll = (state: boolean) => {
        const body = document.querySelector("body");
        state ? body!.style.overflow = "hidden" : body!.style.overflow = "auto";
    };
    disableScroll(true);
    return (
        <>
            <div className={styles.noteFormBackground}></div>
            <form className={styles.noteForm} onSubmit={(data) => onSubmit(data)}>
                <input value={header} onChange={(e) => setHeader(e.target.value)}
                       placeholder="Заголовок" type="text" name="header" maxLength={40}/>
                <textarea placeholder="Текст" value={text} onChange={(e) => setText(e.target.value)}
                          name="text" maxLength={350}></textarea>
                <label htmlFor="size">Размер заметки:</label>
                <select name="size">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
                <button type="submit">Добавить</button>
                <button className={styles.closeButton} onClick={() => {
                    disableScroll(false);
                    showForm(false);
                }}>Закрыть</button>
            </form>
        </>
    );
};
