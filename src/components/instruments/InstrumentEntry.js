import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";

import classes from "./InstrumentEntry.module.css";
import { SubmitInstrument } from "../helperFunctions/pushFunctions/SubmitFunctions";

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
    SubmitInstrument(nameRef.current.value);
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
