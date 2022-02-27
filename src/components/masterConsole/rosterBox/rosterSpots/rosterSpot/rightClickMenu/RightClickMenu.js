import { Fragment } from "react";
import styles from "./RightClickMenu.module.css";

const RightClickMenu = (props) => {
  const hasPlayer = props.hasPlayer;

  const removePlayerClicker = props.removePlayerClicker;

  const removeClicker = () => {
    removePlayerClicker();
  };

  const menu = hasPlayer ? (
    <div className={styles.outerContainer}>
      <button className={styles.button} onClick={removeClicker}>
        Remove Player
      </button>
      <button className={styles.button}>Manual Entry</button>
    </div>
  ) : (
    <div className={styles.outerContainer}>
      <button className={styles.button}>Manual Entry</button>
    </div>
  );

  return <Fragment>{menu}</Fragment>;
};

export default RightClickMenu;
