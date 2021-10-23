import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";
import OrchestrationEntry2 from "./OrchestrationEntry2";
import BigInput from "../input/BigInput";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PieceEntry.module.css";

const pieceObject = {
  id: "",
  title: "",
  composerFirstName: "",
  composerLastName: "",
  duration: "",
  notes: '',
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

  const submitPiece = async (event) => {
    event.preventDefault();

    const pieceToSendUp = { ...piece };
    let response = await PushBasic(pieceToSendUp, "add-piece");
    if (response.ok) {
      props.closeModal();
    }
  };

  const populator = (event, key) => {
    setPiece({ ...piece, [key]: event.target.value });
  };

  const inputter = { label: "", key: "", populator, pObject: piece };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <div className={classes.topLineDiv}>
            <BigInput
              inputObject={{
                ...inputter,
                label: "Title",
                key: "title",
                style: { width: "80%" },
              }}
            />

            <BigInput
              inputObject={{
                ...inputter,
                label: "Duration",
                key: "duration",
                style: { width: "30%" },
              }}
            />
          </div>

          <div className={`${classes.control} ${classes.nameDiv}`}>
            <BigInput
              inputObject={{
                ...inputter,
                label: "Composer Last Name",
                key: "composerLastName",
                style: { width: "70%" },
              }}
            />
            <BigInput
              inputObject={{
                ...inputter,
                label: "Composer First Name",
                key: "composerFirstName",
                style: { width: "70%" },
              }}
            />
          </div>

          <BigInput
              inputObject={{
                ...inputter,
                label: "Piece Notes",
                key: "notes",
                style: { width: "100%", height: '7rem' },
                type: 'textArea'
              }}
            />

          <div className={classes.buttonDiv}>
            <button
              className={classes.button}
              style={{ background: "slategray" }}
              type={"button"}
              onClick={() => instrumentationModalHandler(true)}
            >
              Set Instrumentation?
            </button>
            <button className={classes.button} onClick={submitPiece}>
              Submit
            </button>
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
