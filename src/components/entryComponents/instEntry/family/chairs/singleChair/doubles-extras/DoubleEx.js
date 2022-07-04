import { useState, Fragment } from "react";

import usePart from "../../../../../../../hooks/usePart";

import styles from "./DoubleEx.module.css";

const DoubleEx = ({
  extraInst,
  setInst,
  doublings,
  setDoublings,
  inst,
  setDbsExtrasClicked,
}) => {
  const [openRankBox, SetOpenRankBox] = useState(false);
  const [dblRank, setDblRank] = useState(1);

  const ourPart = usePart(extraInst, dblRank);

  const doublingClicker = () => {
    SetOpenRankBox((previous) => !previous);

    let tempList = doublings.filter(
      (doubling) => doubling.instrument === extraInst
    );

    tempList.length > 0
      ? setDoublings(tempList)
      : setDoublings([...doublings, ourPart]);
  };

  const addButtonClicker = () => {
    setDblRank((previous) => previous + 1);
    console.log(ourPart);
  };

  const subtractButtonClicker = () => {
    setDblRank((previous) => previous - 1);
    console.log(ourPart);
  };

  const fullInstClicker = () => {
    extraInst === inst ? setInst("") : setInst(extraInst);
    setDbsExtrasClicked(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instContainer}>
        <div className={styles.triangle} onClick={doublingClicker}></div>
        <div className={styles.instNameDiv} onClick={fullInstClicker}>
          {extraInst}
        </div>
      </div>

      {openRankBox && (
        <div>
          <button onClick={subtractButtonClicker} className={styles.button}>
            -
          </button>
          <button onClick={addButtonClicker} className={styles.button}>
            +
          </button>{" "}
          <div className={styles.numberDiv}>{dblRank}</div>
        </div>
      )}
    </div>
  );
};

export default DoubleEx;
