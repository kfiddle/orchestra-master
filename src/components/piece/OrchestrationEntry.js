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

  const currentPerformancePiece = props.pp ? props.pp : "";

  const submitOrchestration = () => {
    let flag = true;

    for (let numbOnPart in orchestration) {
      let response = await PushBasic(numbOnPart, currentPerformancePiece);
      if (!response.ok) {
        flag = false;
      }
      if (flag) {
        modalCloser();
      }
    }
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>
            {currentPerformancePiece && currentPerformancePiece.piece.title}
          </h2>
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
          )
        </div>
      </div>
    </Modal>
  );
};

export default OrchestrationEntry;
