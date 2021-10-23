import ReactDOM from "react-dom";

import Card from "../Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
  const { styleObject } = props;
  return (
    <div className={classes.modal} style={styleObject}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { styleObject } = props;

  return (
    <div className={classes.outerContainer}>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay styleObject={styleObject}>
          <Card>{props.children}</Card>
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
