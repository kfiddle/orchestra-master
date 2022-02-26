import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import styles from "./Extra.module.css";

const originalBackground =
  "linear-gradient(to left, transparent, #eccbcb, rgb(90, 85, 85)";

const Extra = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((previous) => !previous);
  };

  let classNames = !clicked ? styles.instrumentItemDiv : styles.clickedItem;

  return (
    <div className={styles.outerContainer}>
      <div onClick={clickHandler} className={classNames}>
        <div className={styles.nameDiv}>{props.instrument}</div>
      </div>
      {clicked && <div style={{ color: "red" }}>howdy</div>}
    </div>
  );
};

export default Extra;
