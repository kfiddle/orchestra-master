import { useState } from "react";

import styles from "./SetStrings.module.css";
import StringsNumbersBox from "./stringsNumbersBox/StringsNumbersBox";

const SetStringsButton = (props) => {
  const [stringsClicked, setStringsClicked] = useState(false);

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
      </button>;
      {stringsClicked && <StringsNumbersBox />}
    </div>
  );
};

export default SetStringsButton;
