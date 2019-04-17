import React, {useState} from "react";
import burgerIcon from "../../icons/burger.svg";
import closeIcon from "../../icons/close.svg";
import logoIcon from "../../icons/Logo.svg";
import styles from "./Header.module.scss";
import {useReduxDispatch, useReduxState} from "../../redux-hooks/redux-hooks";
import {getArchive, getCards} from "../../redux-hooks/actions";

export const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [tab, setTab] = useState(1);
    const dispatch = useReduxDispatch();

    return (
        <div className={styles.header}>
            <img src={logoIcon} alt=""/>
            <div onClick={() => setShowMobileMenu(!showMobileMenu)} className={styles.burger}>
                <img src={burgerIcon} alt=""/>
            </div>
            <div className={`${showMobileMenu ? styles.mobileMenu : ""} ${styles.menuContent}`}>
                <div className={styles.searchBlock}>
                    <img src={closeIcon} className={styles.clear} alt=""/>
                    <input className={styles.input} placeholder="Поиск" type="text"/>
                    <button className={styles.searchButton}>Найти</button>
                </div>
                <div className={styles.controls}>
                    <div onClick={() => {
                        setTab(1);
                        getCards(dispatch);
                    }} className={tab === 0 ? styles["disable-control"]: ''}>Активные</div>
                    <div onClick={() => {
                        setTab(0);
                        getArchive(dispatch);
                    }} className={tab === 1 ? styles["disable-control"]: ''}>Архив</div>
                    <div className={styles.addButton}>Добавить</div>
                </div>
            </div>
        </div>
    );
};
