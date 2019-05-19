import React, {useEffect, useRef, useState} from "react";
import {filterCards, getCards} from "../../redux-hooks/actions";
import {useReduxDispatch} from "../../redux-hooks/redux-hooks";
import styles from "./Filter.module.scss";

interface Filter {
  colors: Array<{
    id: number,
    color: string,
  }>;
}

export const Filter: React.FC<Filter> = ({colors}) => {
    const [currColor, setCurrColor] = useState();
    const dispatch = useReduxDispatch();

    const filterByColor = (id: number, color: string) => {
        setCurrColor(color);
        filterCards(dispatch, String(id));
    };

    const filters = colors.map((item, index) =>
     <div key={index} className={styles.color}
          onClick={() => {
              if (currColor === item.color) {
                  getCards(dispatch);
                  setCurrColor(null);
              } else {
                  filterByColor(item.id, item.color);
              }
          }}
          style={{backgroundColor: item.color,
              opacity: currColor === item.color ? 1 : 0.6}}/>);
    return (
    <div className={styles.filter}>
      <div className={styles.title}>Заметки</div>
      <div className={styles.colors}>
        {filters}
      </div>
    </div>
  );
};
