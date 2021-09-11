import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from './PlayerEntry.module.css';

const PlayerEntry = (props) => {
  const [checkedW9, setCheckedW9] = useState(false);

  let id = "";
  let firstName = "";
  let lastName = "";
  let email = "";
  let phoneNumber = "";
  let address = "";
  let w9 = false;

  if (props.payee) {
    id = props.payee.id;
    firstName = props.payee.firstName;
    lastName = props.payee.lastName;
    email = props.payee.email;
    phoneNumber = props.payee.phoneNumber;
    address = props.payee.address;
    w9 = props.payee.w9ed;
  }

  const fullNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const w9Ref = useRef();
  const addressRef = useRef();

  const submitEvent = (event) => {
    event.preventDefault();

    const names = fullNameRef.current.value.split(" ");
    const inputtedFirstName = names[0];
    const inputtedLastName = names[names.length - 1];

    const payeeToSubmit = {
      id,
      firstName:
        fullNameRef.current.value === "" ? firstName : inputtedFirstName,
      lastName: fullNameRef.current.value === "" ? lastName : inputtedLastName,
      phoneNumber:
        phoneNumberRef.current.value === ""
          ? phoneNumber
          : phoneNumberRef.current.value,
      email: emailRef.current.value === "" ? email : emailRef.current.value,
      address:
        addressRef.current.value === "" ? address : addressRef.current.value,
      w9ed: w9Ref.current.checked,
    };

    const sendPayeeOff = async () => {
      let response = await PushBasic(payeeToSubmit, "/add-payee");
      if (response.ok) {
        props.closeModal();
      }
    };
    setTimeout(sendPayeeOff, 500);
  };

  return (
    <Modal closeModal={props.closeModal}>
      <form className={classes.innerContainer}>
        <div className={classes.control}>
          <label>Full Name</label>
          <input
            type="text"
            ref={fullNameRef}
            placeholder={`${firstName} ${lastName}`}
          />
        </div>

        <div className={classes.control}>
          <label>Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            ref={phoneNumberRef}
            placeholder={phoneNumber}
          />
        </div>

        <div className={classes.control}>
          <label>Email</label>
          <input type="text" id="email" ref={emailRef} placeholder={email} />
        </div>

        <div className={classes.control}>
          <label>Address</label>
          <input
            type="text"
            id="address"
            ref={addressRef}
            placeholder={address}
          />
        </div>

        <div className={classes.w9Div}>
          <label>W9 on file?</label>
          <input type="checkbox" id="w9Check" ref={w9Ref} defaultChecked={w9} />
        </div>

        <div className={classes.buttonDiv}>
          <button className={classes.button} onClick={submitEvent}>
            Submit Payee
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PlayerEntry;
