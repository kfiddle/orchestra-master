import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput3 from "../../input/BigInput3";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";
import Horloge from "./horlage/Horloge";

import PiecesDropDown from "../../piece/PiecesDropDown";

import DisplayedPieces from "../performanceEntry/displayedPieceDiv/DisplayedPieces";

import Concerts from './concerts/Concerts';
import Rehearsals from "./rehearsals/Rehearsals";

import NewlySavedShow from "../../../store/newly-saved-show";

import classes from "./PerformanceEntry2.module.css";

const PerformanceEntry2 = (props) => {
  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);

  const [concertsNumber, setConcertsNumber] = useState(1);
  const [rehearsalsNumber, setRehearsalsNumber] = useState(0);

  const [stringNumbers, setStringNumbers] = useState({});
  const [newlySavedShow, setNewlySavedShow] = useState(null);

  const [performance, setPerformance] = useState({});

  const stringSetters = [stringNumbers, setStringNumbers];
  const stateFuncs = { setPerformance, performance };

  const displayableConcerts = [];
  const displayableRehearsals = [];

  for (let number = 0; number < concertsNumber; number++) {
    displayableConcerts.push(
      <Horloge
        key={number}
        label={number === 0 ? "Primary Date" : ""}
        event={number === 0 ? "PRIMARYDATE" : "CONCERT"}
        newlySavedShow={newlySavedShow}
      />
    );
  }

  for (let number = 0; number < rehearsalsNumber; number++) {
    displayableRehearsals.push(
      <Horloge
        key={number}
        label={number === 0 ? "Rehearsal" : ""}
        event={"REHEARSAL"}
        newlySavedShow={newlySavedShow}
      />
    );
  }

  const addConcertClicked = () => {
    setConcertsNumber((previous) => previous + 1);
  };

  const addRehearsalClicked = () => {
    setRehearsalsNumber((previous) => previous + 1);
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

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <NewlySavedShow.Provider value={{ newlySavedShow }}>
        <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
          <div className={classes.outerContainer}>
            <form>
              <BigInput3
                stateFuncs={stateFuncs}
                label="Performance Title"
                keyName="title"
              />

              <Concerts />

              {/* {displayableConcerts} */}

              {/* <div className={classes.additionalPerfButtonDiv}>
                <button
                  onClick={addConcertClicked}
                  className={classes.button}
                  type={"button"}
                >
                  Additional Performance Date(s) ?
                </button>
              </div> */}

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

              <PiecesDropDown showOrHide={clickedRepDrop} />

              {clickedPiecesList.length > 0 && (
                <DisplayedPieces
                  piecesList={clickedPiecesList}
                  stringSetters={stringSetters}
                />
              )}

              <Rehearsals newlySavedShow={newlySavedShow} />

              <div className={classes.submitDiv}>
                <button className={classes.button} onClick={submitPerformance}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </NewlySavedShow.Provider>
    </PiecesList.Provider>
  );
};

export default PerformanceEntry2;
