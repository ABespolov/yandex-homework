import {compareAsc, distanceInWords} from "date-fns";
import ru from "date-fns/locale/ru";
import React from "react";
import warningIcon from "../../icons/warning.svg";
import styles from "./Warning.module.css";

interface Warning {
  reminder: number;
}

export const Warning: React.FC<Warning> = ({reminder}) => {
  const date = new Date(1970, 0, 1);
  date.setMilliseconds(reminder);
  const result = distanceInWords(
    new Date(),
    date,
    {locale: ru},
  );
  return (
    <div className={styles.warning}>
      <img src={warningIcon} alt=""/>
      <div>Осталось {result}</div>
    </div>
  );
};
