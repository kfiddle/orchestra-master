import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput3 from "../../input/BigInput3";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import DisplayedPieces from "../performanceEntry/displayedPieceDiv/DisplayedPieces";

import Concerts from "./concerts/Concerts";
import Rehearsals from "./rehearsals/Rehearsals";

import NewlySavedShow from "../../../store/newly-saved-show";
import PerformanceStateFunctions from "../../../store/performance-state-functions";

import classes from "./PerformanceEntry2.module.css";
import ProgramRep from "./programRep/ProgramRep";

const PerformanceEntry2 = (props) => {
  const [clickedPiecesList, setClickedPiecesList] = useState([]);

  const [stringNumbers, setStringNumbers] = useState({});
  const [newlySavedShow, setNewlySavedShow] = useState(null);

  const [performance, setPerformance] = useState({});

  const stringSetters = [stringNumbers, setStringNumbers];

  const submitPerformance = async (event) => {
    event.preventDefault();
    const performanceToSendUp = { ...performance };

    let response1 = await PushBasic(performanceToSendUp, "add-performance");
    if (response1.ok) {
      let newShow = await response1.json();
      setNewlySavedShow(newShow);
      props.closeModal();

      if (clickedPiecesList.length > 0) {
        for (let clickedPiece of clickedPiecesList) {
          let showPieceToSendUp = {
            piece: clickedPiece,
            show: newShow,
            orderNum: clickedPiecesList.indexOf(clickedPiece),
          };

          let response2 = await PushBasic(showPieceToSendUp, "add-show-piece");

          if (response2.ok) {
            let newlySavedShowPiece = await response2.json();
            let titleToFindHere = newlySavedShowPiece.piece.title;

            for (let title in stringNumbers) {
              let listOfStrings = [];
              for (let partNum in stringNumbers[title]) {
                listOfStrings.push({
                  stringPart: partNum,
                  number: +stringNumbers[title][partNum],
                });
              }
              let response3 = await PushBasic(
                listOfStrings,
                "make-string-player-in-chairs/" + newlySavedShowPiece.id
              );
            }
          }
        }
      }
    }
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

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
                  <button
                    className={classes.button}
                    onClick={submitPerformance}
                  >
                    Submit
                  </button>
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