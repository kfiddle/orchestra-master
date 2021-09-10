import ReactDOM from "react-dom";


import Card from "../Card";
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div className={classes.outerContainer}>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>
          <Card>
            <form className={classes.innerContainer}>
              <div className={classes.control}>
                <label>Full Name</label>
                {/* <input
                  type="text"
                  ref={fullNameRef}
                  placeholder={`${firstName} ${lastName}`}
                /> */}
              </div>

              <div className={classes.control}>
                <label>Phone Number</label>
                {/* <input
                  type="text"
                  id="phoneNumber"
                  ref={phoneNumberRef}
                  placeholder={phoneNumber}
                /> */}
              </div>

              <div className={classes.control}>
                <label>Email</label>
                {/* <input
                  type="text"
                  id="email"
                  ref={emailRef}
                  placeholder={email}
                /> */}
              </div>

              <div className={classes.control}>
                <label>Address</label>
                {/* <input
                  type="text"
                  id="address"
                  ref={addressRef}
                  placeholder={address}
                /> */}
              </div>

              <div className={classes.w9Div}>
                <label>W9 on file?</label>
                {/* <input
                  type="checkbox"
                  id="w9Check"
                  ref={w9Ref}
                  defaultChecked={w9}
                /> */}
              </div>

              <div className={classes.buttonDiv}>
                <button className={classes.button} >
                  Submit Payee
                </button>
              </div>
            </form>
          </Card>
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
