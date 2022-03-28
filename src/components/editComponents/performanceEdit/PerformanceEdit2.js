import { useEffect, useState } from "react";

import Modal from "../../UI/modal/Modal";

import BigInput3 from "../../input/BigInput3";

import ConcertsEdit from "./concertsEdit/ConcertsEdit";
import DisplayedPiecesSimple from "./displayedPiecesSimple/DisplayedPiecesSimple";
import OrchEntry2 from "../../entryComponents/orchEntry2/OrchEntry2";

import ProgramRepEdit from "./programRepEdit/ProgramRepEdit";
import PerformanceStateFunctions from "../../../store/performance-state-functions";
import ShowTunesList from "../../../store/showtunes-list";
import ShowEditSubmitted from "../../../store/show-edit-submitted";
import PerformanceToEdit from "../../../store/performance-to-edit";

import PieceListHelper from "../../helperFunctions/PieceListHelper";
import styles from "./PerformanceEdit2.module.css";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

const PerformanceEdit2 = (props) => {
  const [performance, setPerformance] = useState(props.performance);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [showEditsSubmitted, setShowEditsSubmitted] = useState(false);
  const [instButtonClicked, setInstButtonClicked] = useState(false);

  useEffect(() => {
    const getPieces = async () => {
      const response = await PushBasic(
        props.performance,
        "get-pieces-on-program"
      );
      if (response.ok) {
        let listOfPieces = await response.json();
        if (listOfPieces.length > 0) {
          setClickedPiecesList(listOfPieces);
        }
      }
    };

    getPieces();

    return () => {};
  }, [performance]);

  const pieceToList = (piece) => {
    PieceListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const submitInstrumentation = (event) => {
    event.preventDefault();
    setInstButtonClicked((previous) => !previous);
  };

  const submitPerformanceEdits = async (event) => {
    event.preventDefault();
    let response = await PushBasic(performance, "edit-performance");
    if (response.ok) {
      setShowEditsSubmitted(true);
      props.closeModal();
    }
  };

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PerformanceToEdit.Provider value={{ performance }}>
      <ShowEditSubmitted.Provider
        value={{ showEditsSubmitted, setShowEditsSubmitted }}
      >
        <ShowTunesList.Provider
          value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
        >
          <PerformanceStateFunctions.Provider
            value={{ setPerformance, performance }}
          >
            <Modal
              styleObject={perfEntryModalStyles}
              closeModal={props.closeModal}
            >
              <div className={styles.outerContainer}>
                <form>
                  <BigInput3 label="Performance Title" keyName="title" />

                  <ConcertsEdit />

                  <BigInput3
                    label="Notes"
                    keyName="notes"
                    style={{ width: "100%", height: "3rem" }}
                  />

                  <ProgramRepEdit />

                  <div className={styles.instrumentationDiv}>
                    <button
                      className={styles.instButton}
                      onClick={submitInstrumentation}
                    >
                      Add Instrumentation
                    </button>
                  </div>

                  {clickedPiecesList.length > 0 && <DisplayedPiecesSimple />}

                  <div className={styles.submitDiv}>
                    <button
                      className={styles.button}
                      onClick={submitPerformanceEdits}
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {instButtonClicked && <OrchEntry2 show={performance} />}
              </div>
            </Modal>
          </PerformanceStateFunctions.Provider>
        </ShowTunesList.Provider>
      </ShowEditSubmitted.Provider>
    </PerformanceToEdit.Provider>
  );
};

export default PerformanceEdit2;
