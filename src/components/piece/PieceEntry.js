import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";
import OrchestrationEntry2 from "./OrchestrationEntry2";
import BigInput from "../input/BigInput";
import { SubmitPiece } from "../helperFunctions/pushFunctions/SubmitFunctions";

import classes from "./PieceEntry.module.css";

const pieceObject = {
  id: "",
  title: "",
  composerFirstName: "",
  composerLastName: "",
  duration: "",
  notes: "",
};

const PieceEntry = (props) => {
  const [instrumentationClicked, setInstrumentationClicked] = useState(false);
  const [piece, setPiece] = useState(pieceObject);

  if (props.piece) {
    setPiece({ ...props.piece });
  }

  const instrumentationModalHandler = (open) => {
    if (open) {
      setInstrumentationClicked(true);
    } else {
      setInstrumentationClicked(false);
    }
  };

  const submitPiece = (event) => {
    event.preventDefault();
    SubmitPiece(piece, props.closeModal);
  };

  const populator = (event, key) => {
    setPiece({ ...piece, [key]: event.target.value });
  };

  const inputter = { label: "", key: "", populator, pObject: piece };

  const inputDeets = [
    ["title", "Title", "80%"],
    ["Duration", "duration", "30%"],
    ["composerLastName", "Composer Last Name", "70%"],
    ["composerFirstName", "Composer First Name", "70%"],
  ];

  const theInputs = inputDeets.map((name) => (
    <BigInput
      inputObject={{
        ...inputter,
        label: name[1],
        key: name[0],
        style: { width: name[2] },
      }}
    />
  ));

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <div className={classes.topLineDiv}>
            {theInputs[0]}
            {theInputs[1]}
          </div>

          <div className={`${classes.control} ${classes.nameDiv}`}>
            {theInputs.splice(2)}
          </div>

          <BigInput
            inputObject={{
              ...inputter,
              label: "Piece Notes",
              key: "notes",
              style: { width: "100%", height: "7rem" },
              type: "textArea",
            }}
          />

          <div className={classes.buttonsContainer}>
            <div className={classes.buttonDiv}>
              <button
                className={classes.button}
                type={"button"}
                onClick={() => instrumentationModalHandler(true)}
              >
                Set Instrumentation?
              </button>
            </div>
            <div className={classes.buttonDiv}>
              <button className={classes.button} onClick={submitPiece}>
                Submit
              </button>
            </div>
            )
            {instrumentationClicked && (
              <OrchestrationEntry2
                closeModal={() => instrumentationModalHandler(false)}
              />
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PieceEntry;
