import React from "react";
import styles from "./Warning.module.css";

interface Warning {
  reminder: number;
}

export const Warning: React.FC<Warning> = ({reminder}) => {
  return (
    <div className={styles.warning}>Отсалось 2 дня</div>
  );
};
