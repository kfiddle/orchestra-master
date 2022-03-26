import { useState } from "react";

import Modal from "../../UI/modal/Modal";

import InstrumentNum from "./instrumentNum/InstrumentNum";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import FamilyBox from "./family/FamilyBox";

import PercussionBox from "./percussionBox/PercussionBox";
import StringsBox from "./stringsBox/StringsBox";

import styles from "./OrchEntry2.module.css";

const primaryParts = [
  "FLUTE",
  "OBOE",
  "CLARINET",
  "BASSOON",
  "HORN",
  "TRUMPET",
  "TROMBONE",
  "TUBA",
];

const OrkEntry = (props) => {
  const displayableParts = primaryParts.map((part) => (
    <InstrumentNum key={primaryParts.indexOf(part)} instrument={part} />
  ));

  const submit = () => {
    console.log("submitting");
  };

  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  return (
    <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
      <div className={styles.outerContainer}>
        <FamilyBox familyLabel={"WINDS"}>
          {displayableParts.slice(0, 4)}
        </FamilyBox>

        <FamilyBox familyLabel={"BRASS"}>
          {displayableParts.slice(4, 8)}
        </FamilyBox>

        <div className={styles.SubmitButtonDiv}>
          <SubmitButton submit={submit} />
        </div>
      </div>
      ;
    </Modal>
  );
};

export default OrkEntry;
