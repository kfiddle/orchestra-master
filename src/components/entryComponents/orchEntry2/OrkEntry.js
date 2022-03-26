import { useState } from "react";

import Modal from "../../UI/modal/Modal";

import InstrumentNum from "./instrumentNum/InstrumentNum";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import FamilyBox from "./family/FamilyBox";

import PercussionBox from "./percussionBox/PercussionBox";
import StringsBox from "./stringsBox/StringsBox";

import styles from "./OrchEntry2.module.css";
import AlternateDiv from "./alternateDiv/AlternateDiv";

const primaryParts = {
  WINDS: { FLUTE: 0, OBOE: 0, CLARINET: 0, BASSOON: 0 },
  BRASS: { HORN: 0, TRUMPET: 0, TROMBONE: 0, TUBA: 0 },
};

const OrkEntry = (props) => {
  const [showAlts, setShowAlts] = useState({ WINDS: false, BRASS: false });

  const submit = () => {
    console.log('primaries');
  };

  const alternateClickHandler = (familyLabel) => {
    setShowAlts({ ...showAlts, [familyLabel]: !showAlts[familyLabel] });
  };

  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  return (
    <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
      <div className={styles.outerContainer}>
        <FamilyBox
          familyLabel={"WINDS"}
          alternateClicked={alternateClickHandler}
        >
          <InstrumentNum instrument={"FLUTE"} family={'WINDS'} showChairs={showAlts['WINDS']} />
          <InstrumentNum instrument={"OBOE"} family={'WINDS'} showChairs={showAlts['WINDS']} />
          <InstrumentNum instrument={"CLARINET"} family={'WINDS'} showChairs={showAlts['WINDS']} />
          <InstrumentNum instrument={"BASSOON"} family={'WINDS'} showChairs={showAlts['WINDS']}/>
        </FamilyBox>

        <FamilyBox
          familyLabel={"BRASS"}
          alternateClicked={alternateClickHandler}
        >
          <InstrumentNum instrument={"HORN"} family={'BRASS'} showChairs={showAlts['BRASS']} />
          <InstrumentNum instrument={"TRUMPET"} family={'BRASS'} showChairs={showAlts['BRASS']}/>
          <InstrumentNum instrument={"TROMBONE"} family={'BRASS'} showChairs={showAlts['BRASS']} />
          <InstrumentNum instrument={"TUBA"} family={'BRASS'} showChairs={showAlts['BRASS']} />
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
