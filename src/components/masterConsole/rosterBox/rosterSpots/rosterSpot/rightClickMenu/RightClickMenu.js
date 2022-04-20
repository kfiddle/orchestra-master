import { Fragment, useState } from "react";
import styles from "./RightClickMenu.module.css";

const testWords = ["apple", "plum", "orange", "blueberry", "apricot"];

const RightClickMenu = (props) => {
  const [manEntryClicked, setManEntryClicked] = useState(false);
  const [hintArray, setHintArray] = useState([]);
  const hasPlayer = props.hasPlayer;

  const removePlayerClicker = props.removePlayerClicker;

  const removeClicker = () => {
    removePlayerClicker();
  };

  const manualClicker = () => {
    setManEntryClicked(true);
  };

  const nameFinder = (event) => {
    let nameFragment = event.target.value;
    let wordFlag = false;

    for (let word of testWords) {
      if (nameFragment === word.slice(0, nameFragment.length)) {
        setHintArray(word);
        wordFlag = true;
      }
    }

    if (!wordFlag || nameFragment.length < 1) {
      setHintArray([]);
    }
  };

  const menu = hasPlayer ? (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={removeClicker}>
        Remove Player
      </button>
      <button className={styles.button} onClick={manualClicker}>
        Manual Entry
      </button>
    </div>
  ) : (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={manualClicker}>
        Manual Entry
      </button>
    </div>
  );

  return (
    <Fragment>
      {menu}
      {manEntryClicked && (
        <div>
          <input className={styles.testInput} onChange={nameFinder}></input>
          <h2 style={{ color: "red" }}>{hintArray}</h2>
        </div>
      )}
    </Fragment>
  );
};

export default RightClickMenu;
