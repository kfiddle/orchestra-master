import { useEffect, useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput from "../../input/BigInput";

import PiecesDropDown from "../../piece/PiecesDropDown";
import DisplayedPieces from '../../entryComponents/performanceEntry/displayedPieceDiv/DisplayedPieces'

import useDates from "../../../hooks/useDates";
import useConcertDates from "../../../hooks/useConcertDates";

import { SubmitPerformance } from "../../helperFunctions/pushFunctions/SubmitFunctions";

import classes from "./PerformanceEdit.module.css";

const PerformanceEntry = (props) => {
  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [performanceDates, setPerformanceDates] = useState([]);

  let perfObject = props.performance;
  // console.log(perfObject)

  const [performance, setPerformance] = useState(props.performance);

  const repClickHandler = () => {
    setClickedRepDrop((previous) => !previous);
  };

  const submitPerformance = async (event) => {
    event.preventDefault();

    let tempPerfList = [...performanceDates];
    rehearsalDatez.forEach((rehearsalDate) => tempPerfList.push(rehearsalDate));
    setPerformanceDates(tempPerfList);

    SubmitPerformance(
      performance,
      clickedPiecesList,
      concertDates,
      rehearsalDatez,
      props.closeModal
    );
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const populator = (event, key) => {
    setPerformance({ ...performance, [key]: event.target.value });
  };

  const textInputter = { label: "", key: "", populator, pObject: performance };

  const [rehearsalDateInputs, rehearsalDatez, rehearsalClicked] = useDates(
    perfObject,
    "Rehearsal"
  );

  const [concertDateInputs, concertDates, concertClicked] =
    useConcertDates(performance);

  const perfEntryModalStyles = { width: "90vw", height: "90vh", top: "5vh" };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <Modal styleObject={perfEntryModalStyles} closeModal={props.closeModal}>
        <div className={classes.outerContainer}>
          <form>
            <BigInput
              inputObject={{
                ...textInputter,
                label: "Performance Title",
                key: "title",
              }}
            />

            {concertDateInputs}

            <div className={classes.additionalPerfButtonDiv}>
              <button
                onClick={concertClicked}
                className={classes.button}
                type={"button"}
              >
                Additional Performance Date(s) ?
              </button>
            </div>

            <BigInput
              inputObject={{
                ...textInputter,
                label: "Notes",
                key: "notes",
                style: { width: "100%", height: "3rem" },
              }}
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
                onClick={rehearsalClicked}
                className={classes.button}
                type={"button"}
              >
                Rehearsal Date
              </button>
            </div>

            <PiecesDropDown showOrHide={clickedRepDrop} />

            <DisplayedPieces piecesList={clickedPiecesList} />
            {rehearsalDateInputs}

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

export default PerformanceEntry;
