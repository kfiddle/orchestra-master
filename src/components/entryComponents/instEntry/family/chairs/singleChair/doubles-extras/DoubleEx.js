import { useState } from "react";

import styles from "./DoubleEx.module.css";

const DoubleEx = (props) => {
  const inst = props.inst;

  const doublingClicker = () => {};

  const fullInstClicker = () => {

  };

  return (
    <div onClick={fullInstClicker} className={styles.outerContainer}>
      <div className={styles.triangle} onClick={doublingClicker}></div>
      {inst}
    </div>
  );
};

export default DoubleEx;
