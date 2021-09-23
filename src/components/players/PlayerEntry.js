import { useState, useEffect, useRef } from "react";

import InstrumentToListHelper from "../helperFunctions/InstrumentToListHelper";
import InstrumentsList from "../../store/instruments-list";
import InstrumentsDropDown from "../instruments/InstrumentsDropDown";

import Modal from "../UI/modal/Modal";
import InputText from "../input/InputText";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PlayerEntry.module.css";

let pObject = { id: "", firstNameArea: "", lastName: "", email: "", homePhone: "", cellPhone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zip: "",
  unions: "",
};

const nameMaker = (fullEnteredName) => {
  const names = fullEnteredName.split(" ");
  const tempFirstNameArea = names.slice(0, -1);

  return {
    enteredFirstNameArea: tempFirstNameArea.join(" "),
    enteredLastName: names[names.length - 1],
  };
};

// homePhone:
// homePhoneRef.current.value === ""
//   ? homePhone
//   : homePhoneRef.current.value,

// cellPhone:
// cellPhoneRef.current.value === ""
//   ? cellPhone
//   : cellPhoneRef.current.value,

// { key: , key: , key: , }

// const makeAnObject = (listOfInputs) => {
//   objectToReturn = {};

//   for (let input of listOfInputs) {

//   }

// };

const PlayerEntry = (props) => {
  const [selectedType, setSelectedType] = useState([false, false]);
  const [clickedInstrumentList, setClickedInstrumentList] = useState([]);
  const [clickedThings, setClickedThings] = useState({
    instrumentDropDown: false,
    deleteButton: false,
  });

  if (props.player) {
    pObject = { ...props.player };
  }

  useEffect(() => {
    if (props.player) {
      props.player.type === "CONTRACT"
        ? setSelectedType([true, false])
        : setSelectedType([false, true]);
    }
  }, [props.player]);

  const fullNameRef = useRef();
  const homePhoneRef = useRef();
  const cellPhoneRef = useRef();
  const emailRef = useRef();
  const addressLine1Ref = useRef();
  const addressLine2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const unionsRef = useRef();
  const contractedRef = useRef();
  const subRef = useRef();

  const instrumentsClickHandler = () => {
    setClickedThings({
      ...clickedThings,
      instrumentDropDown: !clickedThings.instrumentDropDown,
    });
  };

  const deleteButtonHandler = async (event) => {
    event.preventDefault();

    setClickedThings({
      ...clickedThings,
      deleteButton: !clickedThings.deleteButton,
    });

    if (clickedThings.deleteButton) {
      const response = await PushBasic(props.player, "delete-player");
      if (response.ok) {
        props.closeModal();
      }
    }
  };

  const submitPlayer = (event) => {
    event.preventDefault();
    console.log(pObject.homePhone)

    //   const { enteredFirstNameArea, enteredLastName } = nameMaker(
    //     fullNameRef.current.value
    //   );

    //   const playerToSubmit = {
    //     id,
    //     firstNameArea:
    //       fullNameRef.current.value === "" ? firstNameArea : enteredFirstNameArea,
    //     lastName: fullNameRef.current.value === "" ? lastName : enteredLastName,

    //     instrumentEnum:
    //       clickedInstrumentList.length > 0
    //         ? clickedInstrumentList[0].toUpperCase().trim(" ")
    //         : null,

    //     email: emailRef.current.value === "" ? email : emailRef.current.value,

    //     homePhone:
    //       homePhoneRef.current.value === ""
    //         ? homePhone
    //         : homePhoneRef.current.value,

    //     cellPhone:
    //       cellPhoneRef.current.value === ""
    //         ? cellPhone
    //         : cellPhoneRef.current.value,

    //     addressLine1:
    //       addressLine1Ref.current.value === ""
    //         ? addressLine1
    //         : addressLine1Ref.current.value,

    //     addressLine2:
    //       addressLine2Ref.current.value === ""
    //         ? addressLine2
    //         : addressLine2Ref.current.value,

    //     city: cityRef.current.value === "" ? city : cityRef.current.value,
    //     state: stateRef.current.value === "" ? state : stateRef.current.value,
    //     zip: zipRef.current.value === "" ? zip : zipRef.current.value,
    //     unions: unionsRef.current.value === "" ? unions : unionsRef.current.value,

    //     type: selectedType[0] === true ? "CONTRACT" : "SUB",
    //   };

    //   console.log(playerToSubmit);

    //   const sendPlayerOff = async () => {
    //     console.log(playerToSubmit.type);
    //     let response = await PushBasic(playerToSubmit, "add-player");
    //     if (response.ok) {
    //       props.closeModal();
    //     }
    //   };
    //   setTimeout(sendPlayerOff, 200);
  };

  const instrumentToList = (instrument) => {
    InstrumentToListHelper(
      instrument,
      clickedInstrumentList,
      setClickedInstrumentList
    );
  };

  // const populator = (event) => {
  //   pObject[key] = event.target.value;
  // }

  return (
    <InstrumentsList.Provider
      value={{ clickedInstrumentList: clickedInstrumentList, instrumentToList }}
    >
      <Modal closeModal={props.closeModal}>
        <form className={classes.innerContainer}>
          <div className={`${classes.control} ${classes.nameAndInstrumentDiv}`}>
            <div className={`${classes.control} ${classes.nameDiv}`}>
              <label>Full Name</label>
              <input
                type="text"
                ref={fullNameRef}
                placeholder={`${pObject.firstNameArea} ${pObject.lastName}`}
              />
            </div>

            <div
              onClick={instrumentsClickHandler}
              className={`${classes.control} ${classes.instrumentDropdownDiv}`}
            >
              <h3>Instrument</h3>
            </div>
          </div>

          {clickedThings.instrumentDropDown && <InstrumentsDropDown />}

          <div className={classes.phoneDiv}>
            <InputText
              label={"Home Phone"}
              ref={homePhoneRef}
              onChange={() => { populator('homePhone') }}
              placeholder={pObject.homePhone}
            />

            <InputText
              label={"Cell Phone"}
              ref={cellPhoneRef}
              placeholder={pObject.cellPhone}
            />
          </div>

          <InputText
            label={"Email"}
            ref={emailRef}
            placeholder={pObject.email}
            style={{ width: "90%" }}
          />

          <InputText
            label={"Address Line 1"}
            ref={addressLine1Ref}
            placeholder={pObject.addressLine1}
          />

          <InputText
            label={"Address Line 2"}
            ref={addressLine2Ref}
            placeholder={pObject.addressLine2}
          />

          <div className={classes.cityStateDiv}>
            <div className={`${classes.control} ${classes.city}`}>
              <label>City</label>
              <input
                type="text"
                id="address"
                ref={cityRef}
                placeholder={pObject.city}
              />
            </div>

            <div className={`${classes.control} ${classes.state}`}>
              <label>State</label>
              <input type="text" ref={stateRef} placeholder={pObject.state} />
            </div>

            <div className={`${classes.control} ${classes.zip}`}>
              <label>Zip</label>
              <input type="text" ref={zipRef} placeholder={pObject.zip} />
            </div>
          </div>

          <div className={`${classes.control} ${classes.unionsDiv}`}>
            <label>Unions</label>
            <input type="text" ref={unionsRef} placeholder={pObject.unions} />
          </div>

          <div className={classes.checkedDiv}>
            <div>
              <label>Contracted</label>
              <input
                type="radio"
                ref={contractedRef}
                checked={selectedType[0]}
                onChange={() =>
                  setSelectedType((previous) => [!previous[0], false])
                }
              />
            </div>

            <div>
              <label>Sub</label>
              <input
                type="radio"
                ref={subRef}
                checked={selectedType[1]}
                onChange={() =>
                  setSelectedType((previous) => [false, !previous[1]])
                }
              />
            </div>
            <div className={classes.hiddenSubTypeDiv}>
              {selectedType[0] === true && (
                <div>
                  <label>Principal</label>
                  <input type="radio" />
                  <label>Assistant</label>
                  <input type="radio" />
                  <label>Section</label>
                  <input type="radio" />
                </div>
              )}
              {selectedType[1] === true && <h2>I'm a SUB</h2>}
            </div>
          </div>

          <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={submitPlayer}>
              Submit Player
            </button>

            {props.player && (
              <button
                className={classes.deleteButton}
                onClick={deleteButtonHandler}
              >
                {!clickedThings.deleteButton
                  ? "Remove Player"
                  : "Are You Sure?"}
              </button>
            )}
          </div>
        </form>
      </Modal>
    </InstrumentsList.Provider>
  );
};

export default PlayerEntry;
