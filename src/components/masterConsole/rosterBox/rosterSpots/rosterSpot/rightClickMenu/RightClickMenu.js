import { Fragment } from "react";
import styles from "./RightClickMenu.module.css";

const RightClickMenu = (props) => {
  const hasPlayer = props.hasPlayer;

  const menu = hasPlayer ? (
    <div className={styles.outerContainer}>
      <button className={styles.button}>Remove Player</button>
      <button className={styles.button}>Manual Entry</button>
    </div>
  ) : (
    <div className={styles.outerContainer}>
      <button className={styles.button}>Manual Entry</button>
    </div>
  );

  return (
    <Fragment>{menu}</Fragment>
  );
};

export default RightClickMenu;
