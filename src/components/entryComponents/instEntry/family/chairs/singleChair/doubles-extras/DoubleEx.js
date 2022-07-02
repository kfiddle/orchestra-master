import { useState, Fragment } from "react";

import styles from "./DoubleEx.module.css";

const DoubleEx = (props) => {
  const [openRankBox, SetOpenRankBox] = useState(false);

  const inst = props.inst;
  const setFullInst = props.setFullInst;
  const doublings = props.doublings;
  const setDoublings = props.setDoublings;

  const fullInst = props.fullInst;
  const setDbsExtrasClicked = props.setDbsExtrasClicked;

  const doublingClicker = () => {
    SetOpenRankBox(previous => !previous);

    setDoublings([...doublings, inst]);
    console.log(doublings);
  };

  const fullInstClicker = () => {
    inst === fullInst ? setFullInst("") : setFullInst(inst);
    setDbsExtrasClicked(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instContainer}>
        <div className={styles.triangle} onClick={doublingClicker}></div>
        <div className={styles.instNameDiv} onClick={fullInstClicker}>
          {inst}
        </div>
      </div>
      {openRankBox && <div>rankBox</div>}
    </div>
  );
};

export default DoubleEx;
