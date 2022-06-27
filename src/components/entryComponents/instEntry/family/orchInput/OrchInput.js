import { useState } from "react";

import styles from "./OrchInput.module.css";

const OrchInput = (props) => {
  const [invalidEntry, setInvalidEntry] = useState(false);
  const shownInput = props.shownInput;
  const inputSetter = props.inputSetter;
  const standardChecked = props.standardChecked;

  const setNumber = (event) => {
    if (event.target.value.length === 0) {
      setInvalidEntry(false);
    } else {
      for (let char of event.target.value) {
        if ((isNaN(char) && char !== "a") || event.target.value.length > 5) {
          setInvalidEntry(true);
        } else {
          setInvalidEntry(false);
        }
      }
    }

    inputSetter(event.target.value);
  };

  const validOrNot = invalidEntry ? styles.invalid : styles.valid;

  return (
    <input type={"text"} className={validOrNot} onChange={setNumber}></input>
  );
};

export default OrchInput;
