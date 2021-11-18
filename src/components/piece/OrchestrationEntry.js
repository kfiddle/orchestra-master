import { useState } from "react";
import Modal from "../UI/modal/Modal";

import WindInputs from "./orchestrationInputs/WindInputs";
import BrassInputs from "./orchestrationInputs/BrassInputs";
import PercussionInputs from "./orchestrationInputs/PercussionInputs";
import StringInputs from "./orchestrationInputs/StringInputs";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./OrchestrationEntry.module.css";

const OrchestrationEntry = (props) => {
  const [orchestration, setOrchestration] = useState({});
  const stateList = [orchestration, setOrchestration];

  const piece = props.piece;

  const submitOrchestration = async () => {
    let flag = true;

    for (let key in orchestration) {
      let numbOnPart = { part: key, number: orchestration[key], piece };

      let response = await PushBasic(numbOnPart, "add-numb-on-part");
      if (!response.ok) {
        flag = false;
      }
      if (flag) {
        props.closeModal();
      }
    }
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>{piece.title}</h2>
        </div>

        <div className={classes.inputsContainer}>
          <WindInputs stateList={stateList} />
          <BrassInputs stateList={stateList} />
          <PercussionInputs stateList={stateList} />
          <StringInputs stateList={stateList} />
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
