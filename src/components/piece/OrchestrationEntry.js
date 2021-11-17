import { useState } from "react";
import Modal from "../UI/modal/Modal";

import StringInputs from "./orchestrationInputs/StringInputs";

import classes from "./OrchestrationEntry.module.css";

const OrchestrationEntry = (props) => {
  const [orchestration, setOrchestration] = useState({});
  const stateList = [orchestration, setOrchestration];

  const currentPerformancePiece = props.pp ? props.pp : "";

  const submitOrchestration = () => {
      console.log(orchestration)
  }

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>
            {currentPerformancePiece && currentPerformancePiece.piece.title}
          </h2>
        </div>

        <div className={classes.inputsContainer}>
          <div className={classes.windsBox}>
            <input type={"text"}></input>
          </div>
          <div className={classes.brassBox}></div>
          <div className={classes.percussionKeyBoardBox}></div>
          <div className={classes.stringsBox}>
            <StringInputs stateList={stateList} />
          </div>
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
