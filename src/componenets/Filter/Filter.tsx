import React, {useEffect, useRef} from "react";
import styles from "./Filter.module.scss";

interface Filter {
  colors: Array<{
    id: number,
    color: string,
  }>;
}

export const Filter: React.FC<Filter> = ({colors}) => {
 const filters = colors.map((item, index) =>
     <div key={index} className={styles.color} style={{backgroundColor: item.color}}></div>);
 return (
    <div className={styles.filter}>
      <div className={styles.title}>Заметки</div>
      <div className={styles.colors}>
        {filters}
      </div>
    </div>
  );
};
