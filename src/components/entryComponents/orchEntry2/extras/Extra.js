import { useState, useEffect, useContext } from "react";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

import useFetch from "../../../../hooks/useFetch";

import styles from "./Extra.module.css";

const Extra = (props) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);
  const { pieceOrShow, object, submitClicked } =
    useContext(OrchEntry2FormStore);

  const pusher = useFetch();

  const instrument = props.instrument;

  useEffect(() => {
    const sendItUp = async () => {
      for (let j = 1; j <= localNumber; j++) {
        let response = await pusher(
          {
            parts: [instrument],
            rank: j,
            [pieceOrShow]: object,
          },
          "add-chair-to-" + pieceOrShow
        );
      }
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

  let outerClassNames = !clicked
    ? styles.instrumentItemDiv
    : styles.clickedItem;
  let buttonsClassNames = !clicked ? styles.invisible : styles.buttonsAndNumber;

  return (
    <div className={styles.outerContainer}>
      <div className={buttonsClassNames}>
        <button onClick={subtractButtonClicker} className={styles.button}>
          -
        </button>
        <button onClick={addButtonClicker} className={styles.button}>
          +
        </button>{" "}
        <div className={styles.numberDiv}>{localNumber}</div>
      </div>

      <div onClick={clickHandler} className={outerClassNames}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
    </div>
  );
};

export default Extra;
