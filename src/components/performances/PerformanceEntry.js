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

    console.log(performanceToSendUp)

    // let response = await PushBasic(performanceToSendUp, "add-performance");
    // if (response.ok) {
    //   props.closeModal();
    // }
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  const populator = (event, key) => {
    setPerformance({ ...performance, [key]: event.target.value });
  };

  const datePopulator = (event, index) => {
    let tempList = [...performanceDates];
    tempList[index] = event.target.value;
    setPerformanceDates(tempList);
  };

  const textInputter = { label: "", key: "", populator, pObject: perfObject };
  const dateInputter2 = { label: "", datePopulator, pObject: perfObject };

  const [dateInputs, setDateInputs] = useState([
    <InputDateTime
      key={Math.random()}
      inputObject={{
        ...dateInputter2,
        label: "Primary Date",
        index: +0,
      }}
    />,
  ]);

  const additionalDateHandler = () => {
    let tempList = [...dateInputs];
    tempList.push(
      <InputDateTime
        key={Math.random()}
        inputObject={{
          ...dateInputter2,
          label: "Secondary Performance",
          index: tempList.length,
        }}
      />
    );
    setDateInputs(tempList);
  };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <Modal closeModal={props.closeModal}>
        <div className={classes.outerContainer}>
          <form>
            <BigInput
              inputObject={{
                ...textInputter,
                label: "Performance Title",
                key: "title",
              }}
            />

            {dateInputs}

            <div>
              <button onClick={additionalDateHandler} type={"button"}>
                Secondary Performance Date(s) ?
              </button>
            </div>
            <div>
              <button onClick={repClickHandler} type={"button"}>
                Repertoire
              </button>
            </div>
            {clickedRepDrop && <PiecesDropDown />}
            <div className={classes.buttonDiv}>
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
