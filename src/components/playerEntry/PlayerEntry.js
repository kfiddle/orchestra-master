import { useState, useRef } from "react";

import Modal from "../UI/modal/Modal";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PlayerEntry.module.css";

const PlayerEntry = (props) => {
  const [checkedW9, setCheckedW9] = useState(false);

  let id = "";
  let firstNameArea = "";
  let lastName = "";
  let email = "";
  let homePhoneNumber = "";
  let cellPhoneNumber = "";
  let addressLine1 = "";
  let addressLine2 = "";
  let city = "";
  let state = "";
  let zip = "";
  let w9 = false;

  if (props.player) {
    id = props.player.id;
    firstNameArea = props.player.firstNameArea;
    lastName = props.player.lastName;
    email = props.player.email;
    homePhoneNumber = props.player.homePhoneNumber;
    cellPhoneNumber = props.player.cellPhoneNumber;
    addressLine1 = props.player.addressLine1;
    addressLine2 = props.player.addressLine2;
    city = props.player.city;
    state = props.player.state;
    zip = props.player.zip;
    w9 = props.player.w9ed;
  }

  const fullNameRef = useRef();
  const homePhoneNumberRef = useRef();
  const cellPhoneNumberRef = useRef();
  const emailRef = useRef();
  const addressLine1Ref = useRef();
  const addressLine2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const w9Ref = useRef();

  const submitEvent = (event) => {
    event.preventDefault();

    const names = fullNameRef.current.value.split(" ");
    const tempFirstNameArea = names.slice(0, -1);
    const inputtedFirstName = tempFirstNameArea.join(" ");
    const inputtedLastName = names[names.length - 1];

    // const payeeToSubmit = {
    //   id,
    //   firstName:
    //     fullNameRef.current.value === "" ? firstNameArea : inputtedFirstNameArea,
    //   lastName: fullNameRef.current.value === "" ? lastName : inputtedLastName,
    //   phoneNumber:
    //     phoneNumberRef.current.value === ""
    //       ? phoneNumber
    //       : phoneNumberRef.current.value,
    //   email: emailRef.current.value === "" ? email : emailRef.current.value,
    //   address:
    //     addressRef.current.value === "" ? address : addressRef.current.value,
    //   w9ed: w9Ref.current.checked,
    // };

    // const sendPayeeOff = async () => {
    //   let response = await PushBasic(playerToSubmit, "/add-payee");
    //   if (response.ok) {
    //     props.closeModal();
    //   }
    // };
    // setTimeout(sendPlayerOff, 500);
  };

  return (
    <Modal closeModal={props.closeModal}>
      <form className={classes.innerContainer}>
        <div className={classes.control}>
          <label>Full Name</label>
          <input
            type="text"
            ref={fullNameRef}
            placeholder={`${firstNameArea} ${lastName}`}
          />
        </div>

        <div className={classes.control}>
          <label>Home Phone</label>
          <input
            type="text"
            ref={homePhoneNumberRef}
            placeholder={homePhoneNumber}
          />
        </div>

        <div className={classes.control}>
          <label>Cell Phone</label>
          <input
            type="text"
            ref={cellPhoneNumberRef}
            placeholder={cellPhoneNumber}
          />
        </div>

        <div className={classes.control}>
          <label>Email</label>
          <input type="text" ref={emailRef} placeholder={email} />
        </div>

        <div className={classes.control}>
          <label>Address Line 1</label>
          <input
            type="text"
            id="address"
            ref={addressLine1Ref}
            placeholder={addressLine1}
          />
        </div>

        <div className={classes.control}>
          <label>Address Line 2</label>
          <input
            type="text"
            id="address"
            ref={addressLine2Ref}
            placeholder={addressLine2}
          />
        </div>

        <div className={classes.control}>
          <label>City</label>
          <input type="text" id="address" ref={cityRef} placeholder={city} />
        </div>

        <div className={classes.control}>
          <label>State</label>
          <input type="text" ref={cityRef} placeholder={city} />
        </div>

        <div className={classes.control}>
          <label>State</label>
          <input type="text" ref={stateRef} placeholder={state} />
        </div>

        <div className={classes.control}>
          <label>Zip</label>
          <input type="text" ref={zipRef} placeholder={zip} />
        </div>

        {/* <div className={classes.w9Div}>
          <label>W9 on file?</label>
          <input type="checkbox" id="w9Check" ref={w9Ref} defaultChecked={w9} />
        </div> */}

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
