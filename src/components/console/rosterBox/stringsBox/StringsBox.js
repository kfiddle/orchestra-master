import { useState } from "react";

import StringInput from "./stringInput/StringInput";
import Modal from "../../../UI/modal/Modal";

import styles from "./StringsBox.module.css";

const StringsBox = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [standardChecked, setStandardChecked] = useState(true);

  const parts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];

  const showtune = props.piece;
  const show = props.show;

  const title = showtune ? showtune.piece.title : show.title;

  const displayableInputs = parts.map((part, index) => (
    <StringInput
      key={index}
      part={part}
      submitted={submitted}
      showtune={showtune}
      show={show}
      standardChecked={standardChecked}
    />
  ));

  const submitStringNumbers = () => {
    setSubmitted(true);
    setTimeout(closeModal, 300);
  };

  const closeModal = () => {
    props.closeModal();
  };

  const checkHandler = () => {
    setStandardChecked((previous) => !previous);
  };

  const stringsModalStyles = { width: "fit-content", top: "5vh" };

  return (
    <Modal closeModal={closeModal} styleObject={stringsModalStyles}>
      <div className={styles.outerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.titleDiv}>
            <h2>{title}</h2>
          </div>
          <div className={styles.standardStrings}>
            Standard?
            <input
              type={"checkbox"}
              className={styles.checkBox}
              checked={standardChecked}
              onChange={checkHandler}
            />
          </div>
        </div>
        <div className={styles.rightSide}>{displayableInputs}</div>
        <div className={styles.submitDiv}>
          <button className={styles.button} onClick={submitStringNumbers}>
            SUBMIT
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StringsBox;
