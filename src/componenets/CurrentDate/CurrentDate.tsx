import React from "react";
import {distanceInWords, compareAsc} from 'date-fns';
import ru from 'date-fns/locale/ru';
import styles from "./CurrentDate.module.css";

interface CurrentDate {
  created: number;
}

export const CurrentDate: React.FC<CurrentDate> = ({created = 0}) => {
  const date = new Date(1970, 0, 1);
  date.setMilliseconds(created);
    const result = distanceInWords(
      new Date(),
      date,
      {locale: ru}
    );
  return (
    <div className={styles.date}>
      {`${result} назад`}
    </div>
  );
};
