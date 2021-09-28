import { useState, useEffect } from "react";

import classes from "./OrchestrationEntry.module.css";

import Modal from "../UI/modal/Modal";
import OrchestrationInput from "./OrchestrationInput";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import DoubleObjectPush from "../helperFunctions/pushFunctions/DoubleObjectPush";
import GetAList from "../helperFunctions/GetAList";

const OrchestrationEntry2 = (props) => {
  const [instrumentEnumsList, setInstrumentEnumsList] = useState([]);

  useEffect(() => {
    const getInstrumentEnums = async () => {
      const instEnumsResponse = await GetAList("get-all-instrument-enums");
      setInstrumentEnumsList(instEnumsResponse);
    };

    getInstrumentEnums();
  }, []);

  const submitOrchestration = async (event) => {
    event.preventDefault();
  };

//   let response = await PushBasic(objectToSend, "set-roster");
//   if (response.ok) {
//     props.closeModal();
//   }


  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>{props.pp.piece.title}</h2>
        </div>
        <form className={classes.form}>
          <div>
            {instrumentEnumsList.map(instrument => (
                <li>{instrument}</li>
            ))}



            {/* <div>{displayIns.slice(0, 5)}</div>
          <div>{displayIns.slice(5, 10)}</div>
          <div>{displayIns.slice(10, 14)}</div>
          <div>{displayIns.slice(14)}</div> */}
          </div>
          <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={submitOrchestration}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OrchestrationEntry2;
