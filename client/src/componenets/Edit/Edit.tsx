import React, {useEffect, useRef, useState} from "react";
import checkIcon from "../../icons/check.svg";
import closeIcon from "../../icons/close.svg";
import penIcon from "../../icons/pen.svg";
import {addToArchive, deleteCard} from "../../redux-hooks/actions";
import {useReduxDispatch, useReduxState} from "../../redux-hooks/redux-hooks";
import {NoteForm} from "../NoteForm";
import styles from "./Edit.module.scss";

interface EditProps {
    id: number;
}

export const Edit: React.FC<EditProps> = ({id}) => {
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    const [showForm, setShowForm] = useState(false);
    const updateCards = () => state.cards
        .filter((item: any) => item.currentData.created !== id);

    return (
        <>
        {showForm ? <NoteForm showForm={(state: boolean) => setShowForm(state)}/> : null}
        <div className={styles.edit}>
            <div onClick={() => {
                setShowForm(!showForm);
            }}>
                <img src={penIcon} alt=""/>
            </div>
            <div onClick={() => {
                addToArchive(dispatch, String(id), updateCards());
            }}>
                <img src={checkIcon} alt=""/>
            </div>
            <div onClick={() => {
                deleteCard(dispatch, String(id), updateCards());
            }} className={styles.delete}>
                <img src={closeIcon} alt=""/>
            </div>
        </div>
            </>
    );
};
