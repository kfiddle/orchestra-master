import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./InstrumentEntry.module.css";

const InstrumentEntry = (props) => {
  let id = "";
  let name = "";

  const nameRef = useRef();

  if (props.instrument) {
    id = props.instrument.id;
    name = props.instrument.name;
  }

  const submitInstrument = async (event) => {
    event.preventDefault();

    const instrumentToSendUp = {
      name: nameRef.current.value,
    };

    let response = await PushBasic(instrumentToSendUp, "add-instrument");
    if (response.ok) {
      props.closeModal();
    }
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form>
          <div className={classes.control}>
            <label>Instrument Name</label>
            <input type="text" ref={nameRef} placeholder={name} />
          </div>

          <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={submitInstrument}>
              Submit Instrument
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default InstrumentEntry;
