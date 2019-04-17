import React, {useEffect, useRef} from "react";
import checkIcon from "../../icons/check.svg";
import penIcon from "../../icons/pen.svg";
import styles from "./Edit.module.scss";
import {addToArchive} from "../../redux-hooks/actions";
import {useReduxDispatch, useReduxState} from "../../redux-hooks/redux-hooks";

interface EditProps {
    id: number;
}

export const Edit: React.FC<EditProps> = ({id}) => {
    const state = useReduxState();
    const dispatch = useReduxDispatch();
    return (
        <div className={styles.edit}>
            <div>
                <img src={penIcon} alt=""/>
            </div>
            <div onClick={() => {
                const updatedCards = state.cards
                    .filter((item: any) => item.currentData.created !== id);
                addToArchive(dispatch, String(id), updatedCards);
            }}>
                <img src={checkIcon} alt=""/>
            </div>
        </div>
    );
};
