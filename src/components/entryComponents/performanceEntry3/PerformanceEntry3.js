import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput3 from "../../input/BigInput3";

import useFetch from "../../../hooks/useFetch";

import DisplayedPieces from "../performanceEntry/displayedPieceDiv/DisplayedPieces";

import Concerts from "./concerts/Concerts";
import Rehearsals from "./rehearsals/Rehearsals";
import PiecesDropDown from "../../piece/PiecesDropDown";

import NewlySavedShow from "../../../store/newly-saved-show";
import PerformanceStateFunctions from "../../../store/performance-state-functions";

import classes from "./PerformanceEntry3.module.css";
import ProgramRep from "../performanceEntry2/programRep/ProgramRep";
import SubmitButton from "../../UI/submitButton/SubmitButton";
import OrchEntry2 from "../orchEntry2/OrchEntry2";

const PerformanceEntry3 = (props) => {
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [concerts, setConcerts] = useState(0);
  const [rehearsals, setRehearsals] = useState(0);
  const [clickedRepDrop, setClickedRepoDrop] = useState(false);

  const [stringNumbers, setStringNumbers] = useState({});
  const [newlySavedShow, setNewlySavedShow] = useState(null);

  const [performance, setPerformance] = useState({});

  const pusher = useFetch();

  const stringSetters = [stringNumbers, setStringNumbers];

  const submitPerformance = async (event) => {
    event.preventDefault();
    const performanceToSendUp = { ...performance };

    let response1 = await pusher(performanceToSendUp, "add-performance");
    if (response1 !== "phoey") {
      let newShow = response1;
      setNewlySavedShow(newShow);
      props.closeModal();

      if (clickedPiecesList.length > 0) {
        console.log(clickedPiecesList);
        for (let clickedPiece of clickedPiecesList) {
          let showPieceToSendUp = {
            piece: clickedPiece,
            show: newShow,
            orderNum: clickedPiecesList.indexOf(clickedPiece),
          };

          let response2 = await pusher(showPieceToSendUp, "add-show-piece");
        }
      }
    }
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const repClickHandler = () => {
    setClickedRepoDrop((previous) => !previous);
  };

  const addConcert = () => setConcerts((previous) => previous + 1);
  const addRehearsal = () => setRehearsals((previous) => previous + 1);

  const rehearseDel = () => setRehearsals((previous) => previous - 1);

  const perfEntryModalStyles = { width: "90%", height: "100%" };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <PerformanceStateFunctions.Provider
        value={{ setPerformance, performance }}
      >
        <NewlySavedShow.Provider value={{ newlySavedShow }}>
          <Modal
            styleObject={perfEntryModalStyles}
            closeModal={props.closeModal}
          >
            <div className={classes.outerContainer}>
              {/* <form> */}
                <BigInput3 label="Performance Title" keyName="title" />

                <div className={classes.mainButtonsDiv}>
                  <button
                    className={classes.button}
                    type="button"
                    onClick={addConcert}
                  >
                    add concert
                  </button>

                  <button
                    className={classes.button}
                    type="button"
                    onClick={addRehearsal}
                  >
                    ADD REHEARSAL
                  </button>
                  <button
                    className={classes.button}
                    type="button"
                    onClick={repClickHandler}
                  >
                    REPERTOIRE
                  </button>
                </div>

                <PiecesDropDown showOrHide={clickedRepDrop} />

                <div className={classes.servicesDiv}>
                  {rehearsals > 0 && (
                    <Rehearsals num={rehearsals} deleter={rehearseDel} />
                  )}
                  {concerts > 0 && <Concerts num={concerts} />}
                </div>

                {clickedPiecesList.length > 0 && (
                  <DisplayedPieces stringSetters={stringSetters} />
                )}

                <BigInput3
                  label="Notes"
                  keyName="notes"
                  style={{ width: "100%", height: "3rem" }}
                />

                <div className={classes.submitDiv}>
                  <SubmitButton submit={submitPerformance} />
                </div>
              {/* </form> */}
            </div>
          </Modal>
        </NewlySavedShow.Provider>
      </PerformanceStateFunctions.Provider>
    </PiecesList.Provider>
  );
};

export default PerformanceEntry3;
