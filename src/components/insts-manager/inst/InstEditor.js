import { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

import ReactDOM from "react-dom";

import Backdrop from "../../UI/modal/Backdrop";

import ReloadFlagStore from "../../../store/reload-flag-store";

import useFetch from "../../../hooks/useFetch";

import classes from "./InstEditor.module.css";

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const InstEditor = ({ inst, closeModal, children }) => {
  const [enteredAbrev, setEnteredAbrev] = useState("");
  const { setReloadFlag } = useContext(ReloadFlagStore);

  const pusher = useFetch();

  const abbrevHandler = (e) => {
    setEnteredAbrev(e.target.value);
  };

  const submit = async () => {
    const instToSend = { ...inst, abbreviation: enteredAbrev.toUpperCase() };
    const response = await pusher(instToSend, "edit-abbreviation");
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
          <AiOutlineClose className={classes.closeIcon} onClick={closeModal}  />
          <div className={classes.outerContainer}>
            <label className={classes.label}>{inst.name}</label>
            <div>
              <input
                className={classes.input}
                placeholder={inst.abbreviation}
                onChange={abbrevHandler}
              />
            </div>
            <label className={classes.instruction}>
              Enter preferred abbreviation above. *Capitalization is not relevent*
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

export default InstEditor;
