import { useEffect, useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput from "../../input/BigInput";

import PiecesDropDown from "../../piece/PiecesDropDown";
import DisplayedPieces from "../../entryComponents/performanceEntry/displayedPieceDiv/DisplayedPieces";

import useDates from "../../../hooks/useDates";

import { SubmitPerformance } from "../../helperFunctions/pushFunctions/SubmitFunctions";

import classes from "./PerformanceEdit.module.css";
import InputDateTime2 from "../../input/inputDateTime2/InputDateTime2";

const PerformanceEntry = (props) => {
  const [performance, setPerformance] = useState(props.performance);

  const [submitting, setSubmitting] = useState(false);

  const [dateTimes, setDateTimes] = useState([]);

  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [performanceDates, setPerformanceDates] = useState(
    performance.performanceDates
  );

  const dateTimeSetters = [dateTimes, setDateTimes];

  const acceptTimes = (number, index) => {
    console.log(number);
    console.log(index)
  };

  const addConcertClicked = () => {
    setPerformanceDates([
      ...performanceDates,
      { date: "", startTime: "", endTime: "" },
    ]);
  };

  const performanceDateInputs = performanceDates.map((dateTime, index) => (
    <InputDateTime2
      key={performanceDates.indexOf(dateTime)}
      dateTime={dateTime}
      dateTimeSetters={dateTimeSetters}
      label={performanceDates.indexOf(dateTime) === 0 ? "Primary Date" : ""}
      index={index}
      submitting={submitting}
      sendUpTime={acceptTimes}
    />
  ));

  const repClickHandler = () => {
    setClickedRepDrop((previous) => !previous);
  };

  const submitPerformance = async (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const populator = (event, key) => {
    setPerformance({ ...performance, [key]: event.target.value });
  };

  const textInputter = { label: "", key: "", populator, pObject: performance };

  const [rehearsalDateInputs, rehearsalDatez, rehearsalClicked] = useDates(
    performance,
    "Rehearsal"
  );

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

            {performanceDateInputs}

            <div className={classes.additionalPerfButtonDiv}>
              <button
                onClick={addConcertClicked}
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
