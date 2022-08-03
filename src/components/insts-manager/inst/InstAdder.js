import { useState, useContext } from "react";

import ReactDOM from "react-dom";

import Backdrop from "../../UI/modal/Backdrop";

import ReloadFlagStore from "../../../store/reload-flag-store";

import useStringResponse from "../../../hooks/useStringResponse";

import classes from "./InstAdder.module.css";

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const InstAdder = ({ closeModal }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAbrev, setEnteredAbrev] = useState("");
  const { setReloadFlag } = useContext(ReloadFlagStore);

  const pusher = useStringResponse();

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const abbrevHandler = (e) => {
    setEnteredAbrev(e.target.value);
  };

  const submit = async () => {
    const instToSend = {
      name: enteredName.toUpperCase(),
      abbreviation: enteredAbrev.toUpperCase(),
    };
    const response = await pusher(instToSend, "add-instrument");
    if (response !== "phoey") {
      setReloadFlag(true);
      closeModal();
    }
  };

  return (
    <div className={classes.outerContainer}>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>
          <div className={classes.outerContainer}>
            <label className={classes.label}>Enter Instrument Name</label>
            <div>
              <input className={classes.input} onChange={nameHandler} />
            </div>
            <label className={classes.label}>
              (Optional) Preferred Abbreviation
            </label>
            <div>
              <input className={classes.input} onChange={abbrevHandler} />
            </div>

            <label className={classes.instruction}>
              *Capitalization will be disregarded*
            </label>
            <div>
              <button className={classes.button} onClick={submit}>
                SUBMIT
              </button>
            </div>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default InstAdder;
