import { useState } from "react";

import Modal from "../../UI/modal/Modal";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import PercussionBox from "./percussionBox/PercussionBox";
import StringsBox from "./stringsBox/StringsBox";

import FullInstrumentation from "../../../store/full-instrumentation";

import { InstrumentationSubmit } from "../../../store/submit-clicked";
import { PieceHolder } from "../../../store/object-holder";
import { ShowHolder } from "../../../store/object-holder";
import styles from "./OrchEntry2.module.css";

const winds = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];
const brass = ["HORN", "TRUMPET", "TROMBONE", "TUBA"];

const OrchEntry2 = (props) => {
  const [submitClicked, setSubmitClicked] = useState(false);

  const piece = props.piece;
  const show = props.show;
  const closeModal = props.closeModal;

  const title = piece ? piece.title : show.title;

  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  const submit = () => {
    setSubmitClicked(true);
    setTimeout(closeModal, 300);
  };

  return (
    <InstrumentationSubmit.Provider value={{ submitClicked }}>
      <PieceHolder.Provider value={{ piece }}>
        <ShowHolder.Provider value={{ show }}>
          <Modal
            closeModal={props.closeModal}
            styleObject={orchEntryModalStyles}
          >
            <div className={styles.outerContainer}>
              <div className={styles.titleDiv}>
                <h2>{title}</h2>
              </div>
              <Family familyLabel={"WINDS"} list={winds}></Family>
              <Family familyLabel={"BRASS"} list={brass}></Family>
              <PercussionBox />
              <StringsBox />

              <div className={styles.SubmitButtonDiv}>
                <SubmitButton submit={submit} />
              </div>
            </div>
          </Modal>
        </ShowHolder.Provider>
      </PieceHolder.Provider>
    </InstrumentationSubmit.Provider>
  );
};

export default OrchEntry2;
