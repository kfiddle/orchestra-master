import { useState, useEffect, useContext } from "react";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import styles from "./Extra.module.css";

const Extra = (props) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);
  const { pieceOrShow, object, submitClicked } =
    useContext(OrchEntry2FormStore);

  const instrument = props.instrument;

  useEffect(() => {
    const sendItUp = async () => {
      let response = await PushBasic(
        {
          parts: [instrument],
          rank: 1,
          [pieceOrShow]: object,
        },
        "add-chair-to-" + pieceOrShow
      );
    };

    if (submitClicked) {
      sendItUp();
    }
  }, [submitClicked]);

  const clickHandler = () => {
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    setLocalNumber((previous) => previous + 1);
  };

  const subtractButtonClicker = () => {
    setLocalNumber((previous) => previous - 1);
  };

  let classNames = !clicked ? styles.instrumentItemDiv : styles.clickedItem;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonsAndNumber}>
        <button onClick={addButtonClicker} className={styles.button}>
          +
        </button>{" "}
        <button onClick={subtractButtonClicker} className={styles.button}>
          -
        </button>
        <div className={styles.numberDiv}>{localNumber}</div>
      </div>

      <div onClick={clickHandler} className={classNames}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
    </div>
  );
};

export default Extra;
