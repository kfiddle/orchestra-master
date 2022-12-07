import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput3 from "../../input/BigInput3";

import useFetch from "../../../hooks/useFetch";

import DisplayedPieces from "../performanceEntry/displayedPieceDiv/DisplayedPieces";

import Concerts from "./concerts/Concerts";
import Rehearsals from "./rehearsals/Rehearsals";

import NewlySavedShow from "../../../store/newly-saved-show";
import PerformanceStateFunctions from "../../../store/performance-state-functions";

import classes from "./PerformanceEntry2.module.css";
import ProgramRep from "./programRep/ProgramRep";
import SubmitButton from "../../UI/submitButton/SubmitButton";
import OrchEntry2 from "../orchEntry2/OrchEntry2";

const PerformanceEntry2 = (props) => {
  const [clickedPiecesList, setClickedPiecesList] = useState([]);

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

  // const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };
  const perfEntryModalStyles = { width: "90vw" };

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
              <form>
                <BigInput3 label="Performance Title" keyName="title" />

                <Concerts />

                <BigInput3
                  label="Notes"
                  keyName="notes"
                  style={{ width: "100%", height: "3rem" }}
                />

                <ProgramRep />

                {clickedPiecesList.length > 0 && (
                  <DisplayedPieces stringSetters={stringSetters} />
                )}

                <Rehearsals />

                <div className={classes.submitDiv}>
                  <SubmitButton submit={submitPerformance} />
                </div>
              </form>
            </div>
          </Modal>
        </NewlySavedShow.Provider>
      </PerformanceStateFunctions.Provider>
    </PiecesList.Provider>
  );
};

export default PerformanceEntry2;
