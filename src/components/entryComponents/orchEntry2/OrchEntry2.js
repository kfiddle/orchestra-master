import { useState } from "react";

import Modal from "../../UI/modal/Modal";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import PercussionExtrasBox from "./percussionAndExtrasBox/PercussionExtrasBox";
import StringsBox from "./stringsBox/StringsBox";

import { OrchEntry2FormStore } from "../../../store/form-holders";

import styles from "./OrchEntry2.module.css";

const winds = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];
const brass = ["HORN", "TRUMPET", "TROMBONE", "TUBA"];

const OrchEntry2 = (props) => {
  const [submitClicked, setSubmitClicked] = useState(false);

  const piece = props.piece;
  const show = props.show;
  const closeModal = props.closeModal;

  const pieceOrShow = piece ? "piece" : "show";
  const object = piece ? piece : show;

  const title = piece ? piece.title : show.title;

  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  const submit = () => {
    setSubmitClicked(true);
    setTimeout(closeModal, 300);
  };

  const providerObject = { pieceOrShow, object, submitClicked };

  return (
    <OrchEntry2FormStore.Provider value={providerObject}>
      <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
        <div className={styles.outerContainer}>
          <div className={styles.titleDiv}>
            <h2>{title}</h2>
          </div>
          <Family familyLabel={"WINDS"} list={winds}></Family>
          <Family familyLabel={"BRASS"} list={brass}></Family>
         <PercussionExtrasBox />


          <StringsBox />

          <div className={styles.SubmitButtonDiv}>
            <SubmitButton submit={submit} />
          </div>
        </div>
      </Modal>
    </OrchEntry2FormStore.Provider>
  );
};

export default OrchEntry2;
