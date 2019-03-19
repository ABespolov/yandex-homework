import React from "react";
import logoIcon from "../../icons/Logo.svg";
import styles from "./Header.module.css";

interface Header {}

export const Header: React.FC<Header> = () => {
  return (
    <div className={styles.header}>
      <img src={logoIcon} alt=""/>
    </div>
  );
};
