import { useState } from "react";

import { InstEntryStore } from "../../../store/form-holders";

import Modal from "../../UI/modal/Modal";
import Family from "./family/Family";
import ExtrasButton from "./extras/ExtrasButton";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import styles from "./InstEntry2.module.css";
import StringsBox from "./stringsBox/StringsBox";
import PercBox from "./percBox/PercBox";

const modalStyle = {
  background: "slategrey",
  padding: "5rem",
  width: "70vw",
  top: "20vh",
};

const families = {
  WINDS: ["FLUTE", "OBOE", "CLARINET", "BASSOON"],
  BRASS: ["HORN", "TRUMPET", "TROMBONE", "TUBA"],
};

const InstEntry2 = ({ closeModal, piece, show }) => {
  const [chairs, setChairs] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);

  const pieceShow = { show: show, piece, piece };
  const title = piece ? piece.title : show.title;
  const providerObject = { pieceShow, submitClicked, setSubmitClicked };

  const submit = () => {
    setSubmitClicked(true);
  };

  return (
    <InstEntryStore.Provider value={providerObject}>
      <Modal closeModal={closeModal} styleObject={modalStyle}>
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.outerContainer}>
          <Family label={"WINDS AND BRASS"} />

         <PercBox />

          <div className={styles.extrasButtonDiv}>
            <ExtrasButton />
          </div>

          <div>
            <StringsBox />
          </div>

        </div>

        <div className={styles.submitButtonDiv}>
          <button className={styles.button} onClick={submit}>
            SUBMIT
          </button>
        </div>
      </Modal>
    </InstEntryStore.Provider>
  );
};

export default InstEntry2;
