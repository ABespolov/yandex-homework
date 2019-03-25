import React, {useEffect, useRef} from "react";
import checkIcon from "../../icons/check.svg";
import penIcon from "../../icons/pen.svg";
import styles from "./Edit.module.scss";

export const Edit = () => {
 return (
    <div className={styles.edit}>
      <img src={penIcon} alt=""/>
      <img src={checkIcon} alt=""/>
    </div>
  );

};
