import { useState, useRef } from "react";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Modal from "../UI/modal/Modal";
import PiecesList from "../../store/pieces-list";
import ObjectToListHelper from "../helperFunctions/ObjectToListHelper";

import BigInput from "../input/BigInput";
import InputDateTime from "../input/InputDateTime";

import PiecesDropDown from "../piece/PiecesDropDown";

import classes from "./PerformanceEntry.module.css";

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
    const performanceToSendUp = {
      ...performance,
      performanceDateTimes: performanceDates,
    };

    let response = await PushBasic(performanceToSendUp, "add-performance");
    if (response.ok) {
      let newId = await response.json();
      let flag = true;
      for (let piece of clickedPiecesList) {
        response = await PushBasic(piece, "add-performance-piece/" + newId);
        if (!response.ok) {
          flag = false;
        }
      }
      flag && props.closeModal();
    }
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
  };

  const textInputter = { label: "", key: "", populator, pObject: perfObject };
  const dateInputter2 = { label: "", datePopulator, pObject: perfObject };

  const [concertDateInputs, setConcertDateInputs] = useState([
    <InputDateTime
      key={Math.random()}
      inputObject={{
        ...dateInputter2,
        label: "Primary Date",
        index: +0,
      }}
    />,
  ]);

  const dateListHandler = (stateList, label, stateSetter) => {
    let tempList = [...stateList];
    tempList.push(
      <InputDateTime
        key={Math.random()}
        inputObject={{
          ...dateInputter2,
          label,
          index: tempList.length,
        }}
      />
    );
    stateSetter(tempList);
  };

  const dateHandler = (dateType) => {
    if (dateType === "concert") {
      dateListHandler(
        concertDateInputs,
        "Secondary Performance",
        setConcertDateInputs
      );
    } else {
      dateListHandler(concertDateInputs, "Rehearsal", setConcertDateInputs);
    }
  };

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

            <div className={classes.addShowsButtonDiv}>
              <button
                onClick={() => {
                  dateHandler("concert");
                }}
                className={classes.addShowsButton}
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
                style: { width: "100%", height: "5rem" },
              }}
            />
            <div className={classes.repButtonDiv}>
              <button
                onClick={repClickHandler}
                className={classes.repButton}
                type={"button"}
              >
                Repertoire
              </button>
            </div>

            <div className={classes.addShowsButtonDiv}>
              <button
                onClick={() => dateHandler("rehearsal")}
                className={classes.addShowsButton}
                type={"button"}
              >
                Rehearsal Date
              </button>
            </div>

            {clickedRepDrop && <PiecesDropDown />}
            <div className={classes.submitDiv}>
              <button className={classes.repButton} onClick={submitPerformance}>
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
