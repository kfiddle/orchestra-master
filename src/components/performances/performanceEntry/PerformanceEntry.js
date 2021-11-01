import { useState } from "react";
import Modal from "../../UI/modal/Modal";
import PiecesList from "../../../store/pieces-list";
import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";

import BigInput from "../../input/BigInput";
import InputDateTime from "../../input/InputDateTime";

import PiecesDropDown from "../../piece/PiecesDropDown";
import DisplayedPieceDiv from "./displayedPieceDiv.js/DisplayedPieceDiv";

import useDates from "../../../hooks/useDates";

import classes from "./PerformanceEntry.module.css";
import { SubmitPerformance } from "../../helperFunctions/pushFunctions/SubmitFunctions";

let perfObject = {
  id: "",
  title: "",
  performanceDateTimes: [],
  notes: "",
};

const PerformanceEntry = (props) => {
  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [performanceDates, setPerformanceDates] = useState([]);

  if (props.performance) {
    perfObject = { ...props.performance };
  }

  const [performance, setPerformance] = useState(perfObject);

  const repClickHandler = () => {
    setClickedRepDrop((previous) => !previous);
  };

  const submitPerformance = async (event) => {
    event.preventDefault();

    SubmitPerformance(
      performance,
      clickedPiecesList,
      performanceDates,
      props.closeModal
    );
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const populator = (event, key) => {
    setPerformance({ ...performance, [key]: event.target.value });
  };

  const datePopulator = (index, dateTimeObject) => {
    let tempList = [...performanceDates];
    tempList[index] = dateTimeObject;
    setPerformanceDates(tempList);
    console.log(dateTimeObject);
  };

  const textInputter = { label: "", key: "", populator, pObject: perfObject };

  const dateInputter2 = { label: "", datePopulator, pObject: perfObject };

  const [rehearsalDateInputs, rehearsalDatez, rehearsalClicked] = useDates(
    perfObject,
    "Rehearsal"
  );
  const [moreConcertDateInputs, moreConcertDates, concertClicked] = useDates(
    perfObject,
    "Secondary Performance"
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

            <InputDateTime
              inputObject={{
                ...dateInputter2,
                label: "Primary Performance Date",
                index: +0,
              }}
            />

            {moreConcertDateInputs}

            <div className={classes.secondaryPerfButtonDiv}>
              <button
                onClick={concertClicked}
                className={classes.button}
                type={"button"}
              >
                Secondary Performance Date(s) ?
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

            <PiecesDropDown showOrHide={clickedRepDrop}/>

            <DisplayedPieceDiv piecesList={clickedPiecesList} />
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
