import { useState } from "react";
import Modal from "../../UI/modal/Modal";

import FamilyInputs from "./familyInputs/FamilyInputs";

import StringInputs from "./orchestrationInputs/StringInputs";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import classes from "./OrchestrationEntry.module.css";

const OrchestrationEntry = (props) => {
  const [orchestration, setOrchestration] = useState({});
  const stateList = [orchestration, setOrchestration];

  const piece = props.piece;

  const BRASS = "brass";
  const WINDS = "winds";
  const PERCUSSION = 'percussion';
  const STRINGS = 'strings';

  const submitOrchestration = async () => {
    let orchestrationList = [];

    for (let key in orchestration) {
      let partAndNumber = { part: key, number: +orchestration[key] };
      orchestrationList.push(partAndNumber);
    }

    let pieceToSend = { ...piece, orchestration: orchestrationList };
    let response = await PushBasic(pieceToSend, "add-full-orchestration");
    if (response.ok) {
      props.closeModal();
    }
  };

  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  return (
    <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
      <div className={classes.outerContainer}>
        <div className={classes.inputsDiv}>
          <div className={classes.titleDiv}>
            <h2>{piece.title}</h2>
          </div>

          <div className={classes.inputsContainer}>
            <FamilyInputs stateList={stateList} instrumentFamily={WINDS} />

            <FamilyInputs stateList={stateList} instrumentFamily={BRASS} />

            <FamilyInputs stateList={stateList} instrumentFamily={PERCUSSION} />
            <FamilyInputs stateList={stateList} instrumentFamily={STRINGS} />

            {/* <StringInputs stateList={stateList} /> */}
          </div>
        </div>

        <div className={classes.buttonDiv}>
          <button className={classes.button} onClick={submitOrchestration}>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OrchestrationEntry;
