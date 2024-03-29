import { useState } from "react";

import Modal from "../../UI/modal/Modal";
import BigInput from "../../input/BigInput";
import LibraryUploader from "../../piece/LibraryUploader";

import useFetch from "../../../hooks/useFetch";

import classes from "./PieceEntry.module.css";

const pieceObject = {};

const PieceEntry = (props) => {
  const [instrumentationClicked, setInstrumentationClicked] = useState(false);
  const [piece, setPiece] = useState(pieceObject);

  const pusher = useFetch();

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

  const submitPiece = async () => {
    const pieceToSendUp = { ...piece };
    let response = await pusher(pieceToSendUp, "add-piece");
    if (response !== "phoey") {
      props.closeModal();
    }
  };

  const populator = (event, key) => {
    setPiece({ ...piece, [key]: event.target.value });
  };

  const inputter = { label: "", key: "", populator, pObject: piece };

  const inputDeets = [
    ["title", "Title", "80%"],
    ["duration", "Duration", "30%"],
    ["composerName", "Composer Name", "70%"],
    ["otherName", "Other Name"],
    ["arranger", "Arranger"],
    ["publisher", "Publisher"],
    ["libNumber", "Library Catolog #"],
  ];

  const theInputs = inputDeets.map((name) => (
    <BigInput
      key={inputDeets.indexOf(name)}
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

          <div className={`${classes.nameDiv}`}>{theInputs.splice(2)}</div>

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
              {/* <button
                className={classes.button}
                type={"button"}
                onClick={() => instrumentationModalHandler(true)}
              >
                Set Instrumentation?
              </button> */}
            </div>
            <div className={classes.buttonDiv}>
              <button className={classes.button} onClick={submitPiece}>
                Submit
              </button>
            </div>

            {/* <LibraryUploader /> */}

            {/* {instrumentationClicked && (
              <OrchestrationEntry2
                closeModal={() => instrumentationModalHandler(false)}
              />
            )} */}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PieceEntry;
