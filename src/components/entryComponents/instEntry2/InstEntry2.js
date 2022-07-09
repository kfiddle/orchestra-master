import { useState } from "react";

import { InstEntryStore } from "../../../store/form-holders";

import Modal from "../../UI/modal/Modal";
import Family from "./family/Family";
import ExtrasButton from "./extras/ExtrasButton";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import styles from "./InstEntry2.module.css";
import StringsBox from "./stringsBox/StringsBox";

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

  const pieceOrShow = piece ? "piece" : "show";
  const object = piece ? piece : show;
  const title = piece ? piece.title : show.title;
  const providerObject = { pieceOrShow, submitClicked };

  const submit = () => {
    setSubmitClicked(true);
  };

  return (
    <InstEntryStore.Provider value={providerObject}>
      <Modal closeModal={closeModal} styleObject={modalStyle}>
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.outerContainer}>
          <Family
            label={"WINDS"}
            chairs={chairs}
            setChairs={setChairs}
            insts={families["WINDS"]}
          />
          <Family
            label={"BRASS"}
            chairs={chairs}
            setChairs={setChairs}
            insts={families["BRASS"]}
          />

          <div className={styles.extrasButtonDiv}>
            <ExtrasButton />
          </div>

          <div>
            <StringsBox />
          </div>

          <button onClick={() => console.log(chairs)}>CHECK</button>
        </div>

        <div className={styles.SubmitButtonDiv}>
          <button className={styles.button} onClick={submit}>
            SUBMIT
          </button>
        </div>
      </Modal>
    </InstEntryStore.Provider>
  );
};

export default InstEntry2;
