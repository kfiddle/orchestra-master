import { useState } from "react";

import Modal from "../../UI/modal/Modal";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import { InstrumentationSubmit } from "../../../store/submit-clicked";
import styles from "./OrchEntry2.module.css";

const mainInstruments = [
  "FLUTE",
  "OBOE",
  "CLARINET",
  "BASSOON",
  "HORN",
  "TRUMPET",
  "TROMBONE",
  "TUBA",
  "TIMPANI",
  "PERCUSSION",
  "VIOLIN1",
  "VIOLIN2",
  "VIOLA",
  "CELLO",
  "BASS",
];

const winds = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];
const brass = ["HORN", "TRUMPET", "TROMBONE", "TUBA"];

const OrchEntry2 = (props) => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  const submit = () => {
    setSubmitClicked(true);
  };

  return (
    <InstrumentationSubmit.Provider value={{submitClicked}}>
      <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
        <div className={styles.outerContainer}>
          <Family instrumentFamily={"WINDS"}></Family>
          <Family instrumentFamily={"BRASS"}></Family>
          <div className={styles.SubmitButtonDiv}>
            <SubmitButton submit={submit} />
          </div>
        </div>
      </Modal>
    </InstrumentationSubmit.Provider>
  );
};

export default OrchEntry2;
