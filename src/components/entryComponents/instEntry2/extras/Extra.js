import { useState, useEffect, useContext } from "react";

import { InstEntryStore } from "../../../../store/form-holders";

import useFetch from "../../../../hooks/useFetch";

import styles from "./Extra.module.css";

const Extra = ({ instrument }) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);
  const { pieceShow, submitClicked } = useContext(InstEntryStore);

  const pusher = useFetch();

  useEffect(() => {
    const sendUpExtras = async () => {
      for (let j = 1; j <= localNumber; j++) {
        let chairToSend = {
          piece: pieceShow.piece,
          show: pieceShow.show,
          parts: [{ instrument: { name: instrument }, rank: j }],
        };

        let response = await pusher(chairToSend, "add-scoreline");
      }
    };

    if (submitClicked && localNumber > 0) {
      sendUpExtras();
    }
  }, [submitClicked]);

  const clickHandler = () => {
    if (!clicked && localNumber === 0) {
      setLocalNumber(1);
    }

    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    setLocalNumber((previous) => previous + 1);
  };

  const subtractButtonClicker = () => {
    if (localNumber > 0) {
      setLocalNumber((previous) => previous - 1);
    }
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
