import { useState } from "react";

import StringInput from "./stringInput/StringInput";
import Modal from "../../../UI/modal/Modal";

import styles from "./StringsBox.module.css";

const StringsBox = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [symChecked, setSymChecked] = useState(true);
  const [popsChecked, setPopsChecked] = useState(false);


  const parts = [
    { part: "VIOLIN1", sym: 12, pops: 10 },
    { part: "VIOLIN2", sym: 10, pops: 8 },
    { part: "VIOLA", sym: 8, pops: 6 },
    { part: "CELLO", sym: 8, pops: 6 },
    { part: "BASS", sym: 5, pops: 4 },
  ];

  const showtune = props.piece;
  const show = props.show;

  const title = showtune ? showtune.piece.title : show.title;

  const displayableInputs = parts.map((part, index) => (
    <StringInput
      key={index}
      partObject={part}
      submitted={submitted}
      showtune={showtune}
      show={show}
      symChecked={symChecked}
      popsChecked={popsChecked}
    />
  ));

  const submitStringNumbers = () => {
    setSubmitted(true);
    setTimeout(closeModal, 300);
  };

  const closeModal = () => {
    props.closeModal();
  };

  const symCheckHandler = () => {
    setSymChecked((previous) => !previous);
    if (!symChecked) {
      setPopsChecked(false);
    }
  };

  const popsCheckHandler = () => {
    setPopsChecked((previous) => !previous);
    if (!popsChecked) {
      setSymChecked(false);
    }
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
            <div className={styles.gigLabelDiv}>Sym</div>
            <input
              type={"checkbox"}
              className={styles.checkBox}
              checked={symChecked}
              onChange={symCheckHandler}
            />
          </div>

          <div className={styles.standardStrings}>
            <div className={styles.gigLabelDiv}>Pops</div>
            <input
              type={"checkbox"}
              className={styles.checkBox}
              checked={popsChecked}
              onChange={popsCheckHandler}
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
