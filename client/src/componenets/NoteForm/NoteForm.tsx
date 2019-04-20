import React, {useEffect, useState} from "react";
import styles from "./NoteForm.module.scss";

interface NoteFormProps {
    showForm(state: boolean): void;
}

export const NoteForm: React.FC<NoteFormProps> = ({showForm}) => {
    const [header, setHeader] = useState("");
    const [text, setText] = useState("");
    const nt = {
        type: "text",
        title: "Завтра дедлайн",
        text: "Не забыть сверстать макет",
        tags: [
            1,
            2,
        ],
        color: 2,
        size: "s",
        created: 1551714600000,
    };
    const onSubmit = (e: any) => {
        console.log(e.target.value);
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
