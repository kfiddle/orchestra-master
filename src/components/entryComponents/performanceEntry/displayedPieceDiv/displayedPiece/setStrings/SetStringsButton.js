import { useState } from "react";

import styles from "./SetStrings.module.css";

const SetStringsButton = (props) => {
  const setStringsClicked = props.setStringsClicked;

  const setStringsClickHandler = () => {
    setStringsClicked((previous) => !previous);
  };

  return (
    <div>
      <button
        className={styles.setStringsButton}
        type='button'
        onClick={setStringsClickHandler}
      >
        Set Strings?
      </button>
    </div>
  );
};

export default SetStringsButton;
