import { useState } from "react";

import styles from "./DoubleEx.module.css";

const DoubleEx = (props) => {
  const inst = props.inst;
  const setFullInst = props.setFullInst;
  const fullInst = props.fullInst;
  const setDbsExtrasClicked = props.setDbsExtrasClicked;

  const doublingClicker = () => {};

  const fullInstClicker = () => {
    inst === fullInst ? setFullInst("") : setFullInst(inst);
    setDbsExtrasClicked(false);
  };

  return (
    <div onClick={fullInstClicker} className={styles.outerContainer}>
      <div className={styles.triangle} onClick={doublingClicker}></div>
      <div className={styles.instNameDiv} onClick={fullInstClicker}>
        {inst}
      </div>
    </div>
  );
};

export default DoubleEx;
