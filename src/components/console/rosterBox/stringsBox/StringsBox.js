import { useState, useContext } from "react";

import StringInput from "./stringInput/StringInput";
import Modal from "../../../UI/modal/Modal";

import { ConsoleHolder } from "../../../../store/object-holder";

import styles from "./StringsBox.module.css";

const StringsBox = ({ piece: showtune, show, strings, closeModal }) => {
  const [submitted, setSubmitted] = useState(false);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const sections = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];

  const countOf = (stringPart) => {
    return strings.filter(
      (pic) => pic.primaryPart.instrument.name === stringPart
    ).length;
  };

  const title = showtune ? showtune.piece.title : show.title;

  const displayableInputs = sections.map((part, index) => (
    <StringInput key={index} part={part} count={countOf(part)} />
  ));

  const submitStringNumbers = () => {
    setSubmitted(true);
    setTimeout(closeModal, 300);
  };

  const stringsModalStyles = { width: "fit-content", top: "5vh" };

  return (
    <Modal closeModal={closeModal} styleObject={stringsModalStyles}>
      <div className={styles.outerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.titleDiv}>
            <h2>{title}</h2>
            <div className={styles.submitDiv}>
              <button className={styles.button} onClick={submitStringNumbers}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>{displayableInputs}</div>
      </div>
    </Modal>
  );
};

export default StringsBox;
