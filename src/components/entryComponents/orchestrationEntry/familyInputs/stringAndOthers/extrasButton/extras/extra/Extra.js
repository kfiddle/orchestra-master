import { useState } from "react";
import styles from "./Extra.module.css";

const originalBackground =
  "linear-gradient(to left, transparent, #eccbcb, rgb(90, 85, 85)";

const Extra = (props) => {
  const [clicked, setClicked] = useState(false);
  const [extras, setExtras] = props.extrasStateStuff;
  const [localNumber, setLocalNumber] = useState(0);

  const instrument = props.instrument;

  let tempList = extras;

  const addInstrument = () => {
    tempList.push({ parts: [instrument], rank: 1 });
    setExtras(tempList);
    setLocalNumber((previous) => previous + 1);
  };

  const subtractInstrument = () => {
    for (let j = 0; j < tempList.length; j++) {
      if (tempList[j].parts[0] === instrument) {
        tempList.splice(j, 1);
      }
    }
    setExtras(tempList);
  };

  const clickHandler = () => {
    console.log(clicked);
    setClicked((previous) => !previous);

    if (!clicked) {
      addInstrument();
    } else {
      subtractInstrument();
      setLocalNumber(0);
    }
  };

  const addButtonClicker = () => {
    addInstrument();
  };

  const subtractButtonClicker = () => {
    subtractInstrument();
    setLocalNumber((previous) => previous - 1);
  };

  let classNames = !clicked ? styles.instrumentItemDiv : styles.clickedItem;

  return (
    <div className={styles.outerContainer}>
      <div style={{ color: "red" }}>
        {localNumber} <button onClick={addButtonClicker}>+</button>{" "}
        <button onClick={subtractButtonClicker}>-</button>
      </div>

      <div onClick={clickHandler} className={classNames}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
    </div>
  );
};

export default Extra;
