import { useState } from "react";

import StringInput from "./stringInput/StringInput";

import SubmitButton from "../../../UI/submitButton/SubmitButton";
import styles from "./StringsBox.module.css";

const StringsBox = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const parts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];
  const showtune = props.piece;
  const title = showtune.piece.title;

  const displayableInputs = parts.map((part) => (
    <StringInput key={parts.indexOf(part)} part={part} submitted={submitted} />
  ));

  const submitStringNumbers = () => {
    setSubmitted(true)
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.titleDiv}>
        <h2>{title}</h2>
      </div>
      {displayableInputs}
      <div className={styles.submitDiv}>
        <button className={styles.button} onClick={submitStringNumbers}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default StringsBox;
