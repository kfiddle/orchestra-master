import { useState } from "react";

import ReactDOM from "react-dom";

import classes from "./InstEditor.module.css";

const Backdrop = ({ closeModal }) => {
  return <div className={classes.backdrop} onClick={closeModal} />;
};

const ModalOverlay = ({ styleObject, children }) => {
  return (
    <div className={classes.modal} style={styleObject}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const InstEditor = ({ inst, styleObject, closeModal, children }) => {
  return (
    <div className={classes.outerContainer}>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay styleObject={styleObject}>
          <div className={classes.outerContainer}>
            <label className={classes.label}>{inst.name}</label>
            <div>
              <input
                className={classes.input}
                placeholder={inst.abbreviation}
              />
            </div>
            <label className={classes.instruction}>Enter preferred abbreviation above</label>
            <div>
              <button className={classes.button}>SUBMIT</button>
            </div>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default InstEditor;
