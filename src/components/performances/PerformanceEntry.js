import { useState, useRef } from "react";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Modal from "../UI/modal/Modal";

import PiecesDropDown from "../piece/PiecesDropDown";

import classes from "./PerformanceEntry.module.css";

const PerformanceEntry = (props) => {
  const [clickedPiecesDrop, setClickedPiecesDrop] = useState(false);


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

  const submitPerformance = async (event) => {
    event.preventDefault();

    const performanceToSendUp = {
      title: titleRef.current.value,
      date: dateRef.current.value
    };

    let response = await PushBasic(performanceToSendUp, "add-performance");
    if (response.ok) {
      props.closeModal();
    }
  };

  return (
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

          <div>
            <button>Repertoire</button>
          </div>

          {clickedPiecesDrop && <PiecesDropDown />}

          <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={submitPerformance}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PerformanceEntry;
