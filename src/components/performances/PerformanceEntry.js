import { useState, useRef } from "react";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Modal from "../UI/modal/Modal";
import PiecesList from "../../store/pieces-list";
import InstrumentToListHelper from "../helperFunctions/InstrumentToListHelper";

import PiecesDropDown from "../piece/PiecesDropDown";

import classes from "./PerformanceEntry.module.css";

const PerformanceEntry = (props) => {
  const [clickedRepDrop, setClickedRepDrop] = useState(false);
  const [clickedPiecesList, setClickedPiecesList] = useState([]);
  const [additionalDateClicks, setAdditionalDateClicks] = useState(0);

  let id = "";
  let title = "";
  let date = "";

  const titleRef = useRef();
  const dateRef = useRef();

  if (props.performance) {
    id = props.performance.id;
    title = props.performance.title;
    date = props.performance.date;
  }

  const additionalDateHandler = () => {
    setAdditionalDateClicks(additionalDateClicks + 1);
  };

  const repClickHandler = () => {
    setClickedRepDrop((previous) => !previous);
  };

  const submitPerformance = async (event) => {
    event.preventDefault();

    const performanceToSendUp = {
      title: titleRef.current.value,
      date: dateRef.current.value,
    };

    let response = await PushBasic(performanceToSendUp, "add-performance");
    if (response.ok) {
      props.closeModal();
    }
  };

  const pieceToList = (piece) => {
    InstrumentToListHelper(piece, clickedPiecesList, setClickedPiecesList);
  };

  let additionalClicksInputs = [];
  for (let click = 0; click < additionalDateClicks; click++) {
    additionalClicksInputs.push(
      <div className={`${classes.control} ${classes.dateDiv}`}>
        <label htmlFor="date">Additional Date</label>
        <input
          type="date"
          id={classes.dateInput}
          ref={dateRef}
          defaultValue={date}
        />
      </div>
    );
  }

  return (
    <PiecesList.Provider
      value={{ clickedPiecesList: clickedPiecesList, pieceToList }}
    >
      <Modal closeModal={props.closeModal}>
        <div className={classes.outerContainer}>
          <form>
            <div className={classes.control}>
              <label>Performance Title</label>
              <input type="text" ref={titleRef} placeholder={title} />
            </div>
            <div className={`${classes.control} ${classes.dateDiv}`}>
              <label htmlFor="date">Performance Date</label>
              <input
                type="date"
                id={classes.dateInput}
                ref={dateRef}
                defaultValue={date}
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
