import { useEffect, useState } from "react";

import Modal from "../../UI/modal/Modal";

import BigInput3 from "../../input/BigInput3";

import ConcertsEdit from "./concertsEdit/ConcertsEdit";
import DisplayedPiecesSimple from "./displayedPiecesSimple/DisplayedPiecesSimple";

import OrchEntry2 from "../../entryComponents/orchEntry2/OrchEntry2";
import OrchestrationEntry from "../../entryComponents/orchestrationEntry/OrchestrationEntry";
import InstEntry2 from "../../entryComponents/instEntry2/InstEntry2";

import ProgramRepEdit from "./programRepEdit/ProgramRepEdit";
import PerformanceStateFunctions from "../../../store/performance-state-functions";
import ShowTunesList from "../../../store/showtunes-list";
import { ShowEditsSubmitted } from "../../../store/submit-clicked";
import PerformanceToEdit from "../../../store/performance-to-edit";

import PieceListHelper from "../../helperFunctions/PieceListHelper";
import styles from "./PerformanceEdit2.module.css";

import useFetch from "../../../hooks/useFetch";

const PerformanceEdit2 = (props) => {
  const [performance, setPerformance] = useState(props.performance);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [showPiecesList, setShowPiecesList] = useState([]);
  const [showEditsSubmitted, setShowEditsSubmitted] = useState(false);
  const [instButtonClicked, setInstButtonClicked] = useState(false);

  const pusher = useFetch();

  useEffect(() => {
    const getPieces = async () => {
      try {
        const response = await pusher(
          props.performance,
          "get-pieces-on-program"
        );
        if (response !== "phoey") {
          setClickedPiecesList(response);
        }
      } catch (error) {
        return console.log(error);
      }
    };
    getPieces();

    const getShowPieces = async () => {
      try {
        const response = await pusher(
          props.performance,
          "get-showtunes-on-program"
        );
        if (response !== "phoey") {
          setShowPiecesList(response);
        }
      } catch (error) {
        return console.log(error);
      }
    };
    getShowPieces();

    return () => {};
  }, [performance]);

  const pieceToList = (piece) => {
    PieceListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const submitInstrumentation = (event) => {
    event.preventDefault();
    setInstButtonClicked((previous) => !previous);
  };

  const closeModal = () => {
    setInstButtonClicked(false);
  };

  const submitPerformanceEdits = async (event) => {
    event.preventDefault();

    setShowEditsSubmitted(true);

    let response = await pusher(performance, "edit-performance");
    if (response !== "phoey") {
      props.closeModal();
    }
  };

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PerformanceToEdit.Provider value={{ performance }}>
      <ShowEditsSubmitted.Provider value={{ showEditsSubmitted }}>
        <ShowTunesList.Provider
          value={{
            clickedPiecesList: clickedPiecesList,
            pieceToList,
            showPiecesList,
          }}
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
                      General Roster
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

                {instButtonClicked && (
                  // <OrchEntry2 show={performance} closeModal={closeModal} />
                  <InstEntry2 closeModal={closeModal} show={performance} />
                )}

                {/* {instButtonClicked && (
                  <OrchestrationEntry
                    show={performance}
                    closeModal={closeModal}
                  />
                )} */}
              </div>
            </Modal>
          </PerformanceStateFunctions.Provider>
        </ShowTunesList.Provider>
      </ShowEditsSubmitted.Provider>
    </PerformanceToEdit.Provider>
  );
};

export default PerformanceEdit2;
