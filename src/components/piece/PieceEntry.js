import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";
import OrchestrationEntry2 from "./OrchestrationEntry2";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PieceEntry.module.css";

const PieceEntry = (props) => {
  const [instrumentationClicked, setInstrumentationClicked] = useState(false);

  let id = "";
  let title = "";
  let composer = "";

  const titleRef = useRef();
  const composerFirstNameRef = useRef();
  const composerLastNameRef = useRef();

  if (props.piece) {
    id = props.piece.id;
    title = props.piece.title;
    composer = props.piece.composer;
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

    const pieceToSendUp =
      composerFirstNameRef.current.value === ""
        ? {
            title: titleRef.current.value,
            composerLastName: composerLastNameRef.current.value,
          }
        : {
            title: titleRef.current.value,
            composerFirstName: composerFirstNameRef.current.value,
            composerLastName: composerLastNameRef.current.value,
          };

    let response = await PushBasic(pieceToSendUp, "add-piece");
    if (response.ok) {
      props.closeModal();
    }
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <div className={classes.control}>
            <label>Piece Title</label>
            <input type="text" ref={titleRef} placeholder={title} />
          </div>

          <div className={`${classes.control} ${classes.nameDiv}`}>
            <label htmlFor="date">Composer Last Name</label>
            <input type="text" ref={composerLastNameRef} />

            <label htmlFor="date">First Name</label>
            <input type="text" ref={composerFirstNameRef} />
          </div>

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
