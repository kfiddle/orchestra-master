import { useState } from "react";
import Modal from "../../UI/modal/Modal";

import WindInputs from "./orchestrationInputs/WindInputs";
import BrassInputs from "./orchestrationInputs/BrassInputs";
import PercussionInputs from "./orchestrationInputs/PercussionInputs";
import StringInputs from "./orchestrationInputs/StringInputs";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import classes from "./OrchestrationEntry.module.css";

const OrchestrationEntry = (props) => {
  const [orchestration, setOrchestration] = useState({});
  const stateList = [orchestration, setOrchestration];

  const piece = props.piece;

  const submitOrchestration = async () => {
    let orchestrationList = [];

    for (let key in orchestration) {
      let partAndNumber = { part: key, number: +orchestration[key] };
      orchestrationList.push(partAndNumber);
    }

    let pieceToSend = { ...piece, orchestration: orchestrationList };
    console.log(pieceToSend);
    let response = await PushBasic(pieceToSend, "add-full-orchestration");
    if (response.ok) {
      props.closeModal();
    }
  };

  const orchEntryModalStyles = { width: "50vw", top: "5vh"};

  return (
    <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
      <div className={classes.outerContainer}>
        <div className={classes.inputsDiv}>
          <div className={classes.titleDiv}>
            <h2>{piece.title}</h2>
          </div>

          <div className={classes.inputsContainer}>
            <WindInputs stateList={stateList} />
            <BrassInputs stateList={stateList} />
            <PercussionInputs stateList={stateList} />
            <StringInputs stateList={stateList} />
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
