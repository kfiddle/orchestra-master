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
  const [isValid, setIsValid] = useState({ name: true, abbrev: true });
  const { setReloadFlag } = useContext(ReloadFlagStore);

  const pusher = useStringResponse();

  const inputHandler = (e, type) => {
    setIsValid({ name: true, abbrev: true });
    type === "name"
      ? setEnteredName(e.target.value)
      : setEnteredAbrev(e.target.value);
  };

  const submit = async () => {
    const instToSend = {
      name: enteredName.toUpperCase(),
      abbreviation: enteredAbrev.toUpperCase(),
      scoreOrder: 5
    };
    const answer = await pusher(instToSend, "add-instrument");

    if (answer === "success") {
      setReloadFlag(true);
      closeModal();
    } else if (answer === "instrument exists") {
      setIsValid({ name: false, abbrev: true });
    } else if (answer === "abbreviation exists") {
      setIsValid({ name: true, abbrev: false });
    }
  };

  const nameClasses = !isValid.name ? classes.invalid : null;
  const abbrevClasses = !isValid.abbrev ? classes.invalid : null;

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
              <input
                className={`${classes.input} ${nameClasses}`}
                onChange={(e) => inputHandler(e, "name")}
              />
            </div>
            <label className={classes.label}>
              (Optional) Preferred Abbreviation
            </label>
            <div>
              <input
                className={`${classes.input} ${abbrevClasses}`}
                onChange={(e) => inputHandler(e, "abbrev")}
              />
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
