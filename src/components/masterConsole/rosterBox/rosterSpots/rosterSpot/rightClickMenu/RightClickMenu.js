import { Fragment, useState } from "react";
import AutoFillInput from "./autoFillInput/AutoFillInput";
import styles from "./RightClickMenu.module.css";


const RightClickMenu = (props) => {
  const [manEntryClicked, setManEntryClicked] = useState(false);
  const hasPlayer = props.hasPlayer;

  const removePlayerClicker = props.removePlayerClicker;

  const removeClicker = () => {
    removePlayerClicker();
  };

  const manualClicker = () => {
    setManEntryClicked(true);
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
          <AutoFillInput />
        </div>
      )}
    </Fragment>
  );
};

export default RightClickMenu;
