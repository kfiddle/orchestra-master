import { useState, useRef } from "react";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Modal from "../UI/modal/Modal";
import PiecesList from "../../store/pieces-list";
import ObjectToListHelper from "../helperFunctions/ObjectToListHelper";

import BigInput from "../input/BigInput";
import InputDate from "../input/InputeDate";

import PiecesDropDown from "../piece/PiecesDropDown";

import classes from "./PerformanceEntry.module.css";

let perfObject = {
  id: "",
  title: "",
  primaryDateTime: { date: "", startTime: "" },
};

const PerformanceEntry = (props) => {
  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [additionalDateClicks, setAdditionalDateClicks] = useState(0);
  const [performanceDates, setPerformanceDates] = useState([]);

  const titleRef = useRef();
  const dateRef = useRef();

  if (props.performance) {
    perfObject = { ...props.performance };
  }

  const [performance, setPerformance] = useState(perfObject);

  const additionalDateHandler = () => {
    setAdditionalDateClicks(additionalDateClicks + 1);
  };

  const repClickHandler = () => {
    setClickedRepDrop((previous) => !previous);
  };

  const submitPerformance = async (event) => {
    event.preventDefault();

    const performanceToSendUp = {
      ...performance,
    };

    console.log(performanceToSendUp);

    let response = await PushBasic(performanceToSendUp, "add-performance");
    if (response.ok) {
      props.closeModal();
    }
  };

  const pieceToList = (piece) => {
    ObjectToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  let additionalClicksInputs = [];
  for (let click = 0; click < additionalDateClicks; click++) {
    additionalClicksInputs.push(
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label htmlFor="date">Additional Date</label>
        <input
          type="date"
          // id={classes.dateInput}
          // ref={dateRef}
          // defaultValue={date}
        />
      </div>
    );
  }

  const populator = (event, key, type) => {
    if (type === "text") {
      setPerformance({ ...performance, [key]: event.target.value });
    } else if (type === "date") {
      setPerformance({ ...performance, [key]: { date: event.target.value } });
    }
  };

  const inputter = { label: "", key: "", populator, pObject: perfObject };

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <Modal closeModal={props.closeModal}>
        <div className={classes.outerContainer}>
          <form>
            <BigInput
              inputObject={{
                ...inputter,
                label: "Performance Title",
                key: "title",
              }}
            />

            <div className={`${classes.control} ${classes.dateDiv}`}>
              {/* <label htmlFor="date">Performance Date</label>
              <input
                type="date"
                id={classes.dateInput}
                ref={dateRef}
                defaultValue={perfObject.primaryDateTime.startTime}
              /> */}

              <InputDate
                inputObject={{
                  ...inputter,
                  label: "Primary Date",
                  key: "primaryDateTime",
                }}
              />
            </div>

            {additionalClicksInputs}

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
