import { useState, useEffect } from "react";

import classes from "./OrchestrationEntry.module.css";

import Modal from "../UI/modal/Modal";
import OrchestrationInput from "./OrchestrationInput";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import DoubleObjectPush from "../helperFunctions/pushFunctions/DoubleObjectPush";
import GetAList from "../helperFunctions/GetAList";

const OrchestrationEntry2 = (props) => {
  const [instrumentEnumsList, setInstrumentEnumsList] = useState([]);
  const [listToSendUp, setListToSendUp] = useState([]);

  useEffect(() => {
    const getInstrumentEnums = async () => {
      const instEnumsResponse = await GetAList("get-all-instrument-enums");
      setInstrumentEnumsList(instEnumsResponse);
    };

    getInstrumentEnums();
  }, []);

  const submitOrchestration = async (event) => {
    event.preventDefault();
    console.log(listToSendUp)
  };

  const setANumber = (instEnum, number) => {
      setListToSendUp([...listToSendUp, {instrumentEnum: instEnum, number: number} ])
  };

  const sectionInputs = instrumentEnumsList.map((instEnum) => (
    <OrchestrationInput instEnum={instEnum} setANumber={setANumber}/>
  ));

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>{props.pp.piece.title}</h2>
        </div>
        <form className={classes.form}>
          <div>{sectionInputs.slice(0, 5)}</div>
          <div>{sectionInputs.slice(5, 10)}</div>
          <div>{sectionInputs.slice(10, 14)}</div>
          <div>{sectionInputs.slice(14)}</div>

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
