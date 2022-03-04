import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput3 from "../../input/BigInput3";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";
import Horloge from "./horlage/Horloge";

import PiecesDropDown from "../../piece/PiecesDropDown";

import DisplayedPieces from "../performanceEntry/displayedPieceDiv/DisplayedPieces";

import classes from "./PerformanceEntry2.module.css";

const PerformanceEntry2 = (props) => {
  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [concertsNumber, setConcertsNumber] = useState(1);
  const [stringNumbers, setStringNumbers] = useState({});
  const [newlySavedShow, setNewlySavedShow] = useState(null);

  const [performance, setPerformance] = useState({});

  const stringSetters = [stringNumbers, setStringNumbers];
  const stateFuncs = { setPerformance, performance };

  const displayableHorlages = [];

  for (let number = 0; number < concertsNumber; number++) {
    displayableHorlages.push(
      <Horloge
        key={number}
        label={number === 0 ? "Primary Date" : ""}
        event={number === 0 ? "PRIMARYDATE" : "CONCERT"}
        newlySavedShow={newlySavedShow}
      />
    );
  }

  const addConcertClicked = () => {
    setConcertsNumber((previous) => previous + 1);
  };

  const repClickHandler = () => {
    setClickedRepDrop((previous) => !previous);
  };

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

  // if (clickedPiecesList.length > 0) {
  //     for (let clickedPiece of clickedPiecesList) {
  //       let showPieceToSendUp = {
  //         piece: clickedPiece,
  //         show: newlySavedShow,
  //         orderNum: clickedPiecesList.indexOf(clickedPiece),
  //       };

  //       let response2 = await PushBasic(showPieceToSendUp, "add-show-piece");
  // }
  // };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
        <div className={classes.outerContainer}>
          <form>
            <BigInput3
              stateFuncs={stateFuncs}
              label="Performance Title"
              keyName="title"
            />

            {displayableHorlages}

            <div className={classes.additionalPerfButtonDiv}>
              <button
                onClick={addConcertClicked}
                className={classes.button}
                type={"button"}
              >
                Additional Performance Date(s) ?
              </button>
            </div>

            <BigInput3
              stateFuncs={stateFuncs}
              label="Notes"
              keyName="notes"
              style={{ width: "100%", height: "3rem" }}
            />

            <div className={classes.repButtonDiv}>
              <button
                onClick={repClickHandler}
                className={classes.button}
                type={"button"}
              >
                Repertoire
              </button>
            </div>

            <div className={classes.rehearsalButtonDiv}>
              <button
                // onClick={rehearsalClicked}
                className={classes.button}
                type={"button"}
              >
                Rehearsal Date
              </button>
            </div>

            <PiecesDropDown showOrHide={clickedRepDrop} />

            {clickedPiecesList.length > 0 && (
              <DisplayedPieces
                piecesList={clickedPiecesList}
                stringSetters={stringSetters}
              />
            )}

            <div className={classes.submitDiv}>
              <button className={classes.button} onClick={submitPerformance}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </PiecesList.Provider>
  );
};

export default PerformanceEntry2;
