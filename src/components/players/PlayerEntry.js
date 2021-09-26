import { useState, useEffect, useRef } from "react";

import InstrumentToListHelper from "../helperFunctions/InstrumentToListHelper";
import InstrumentsList from "../../store/instruments-list";
import InstrumentsDropDown from "../instruments/InstrumentsDropDown";

import Modal from "../UI/modal/Modal";
import InputText from "../input/InputText";
import BigInput from "../input/BigInput";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PlayerEntry.module.css";

let pObject = {
  id: "",
  firstNameArea: "",
  lastName: "",
  email: "",
  homePhone: "",
  cellPhone: "",
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

  const [player, setPlayer] = useState(pObject);

  useEffect(() => {
    if (props.player) {
      props.player.type === "CONTRACT"
        ? setSelectedType([true, false])
        : setSelectedType([false, true]);
    }
  }, [props.player]);

  const unionsRef = useRef();
  const contractedRef = useRef();
  const subRef = useRef();

  const instrumentsClickHandler = () => {
    setClickedThings({
      ...clickedThings,
      instrumentDropDown: !clickedThings.instrumentDropDown,
    });
  };

  const displayedChosenInstruments = clickedInstrumentList.map((instrument) => (
    <div key={Math.random()}><h2 style={{fontSize: '1.5rem'}}>{instrument}</h2></div>
  ));

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

  const submitPlayer = async (event) => {
    event.preventDefault();
    const { enteredFirstNameArea, enteredLastName } = nameMaker(
      player.firstNameArea
    );

    let playerToSend = {
      ...player,
      firstNameArea: enteredFirstNameArea,
      lastName: enteredLastName,
      instrumentEnum:
        clickedInstrumentList.length > 0
          ? clickedInstrumentList[0].toUpperCase().trim(" ")
          : null,
      type: selectedType[0] === true ? "CONTRACT" : "SUB",
    };

    console.log(playerToSend);

    const sendPlayerOff = async () => {
      let response = await PushBasic(playerToSend, "add-player");
      if (response.ok) {
        props.closeModal();
      }
    };
    setTimeout(sendPlayerOff, 200);
  };

  const instrumentToList = (instrument) => {
    InstrumentToListHelper(
      instrument,
      clickedInstrumentList,
      setClickedInstrumentList
    );
  };

  const populator = (event, key) => {
    setPlayer({ ...player, [key]: event.target.value });
  };

  const inputter = { label: "", key: "", populator, pObject };

  return (
    <InstrumentsList.Provider
      value={{ clickedInstrumentList: clickedInstrumentList, instrumentToList }}
    >
      <Modal closeModal={props.closeModal}>
        <form className={classes.innerContainer}>
          <div className={`${classes.control} ${classes.nameAndInstrumentDiv}`}>
            <InputText
              label={"Full Name"}
              onChange={(event) =>
                setPlayer({ ...player, firstNameArea: event.target.value })
              }
              placeholder={`${pObject.firstNameArea} ${pObject.lastName}`}
              style={{ width: "50%" }}
            />

            <div
              onClick={instrumentsClickHandler}
              className={`${classes.control} ${classes.instrumentDropdownDiv}`}
            >
              <h3>Instrument(s)</h3>
            </div>
          </div>

          <div style={{position: 'absolute', right: '25%', top: '5rem'}}>{displayedChosenInstruments}</div>

          {clickedThings.instrumentDropDown && <InstrumentsDropDown />}

          <div className={classes.phoneDiv}>
            <BigInput
              inputObject={{
                ...inputter,
                label: "Home Phone",
                key: "homePhone",
              }}
            />
            <BigInput
              inputObject={{
                ...inputter,
                label: "Cell Phone",
                key: "cellPhone",
              }}
            />
          </div>
          <BigInput
            inputObject={{
              ...inputter,
              label: "Email",
              key: "email",
              style: { width: "90%" },
            }}
          />
          <BigInput
            inputObject={{
              ...inputter,
              label: "Address Line 1",
              key: "addressLine1",
            }}
          />

          <BigInput
            inputObject={{
              ...inputter,
              label: "Address Line 2",
              key: "addressLine2",
            }}
          />
          <div className={classes.cityStateDiv}>
            <BigInput
              inputObject={{
                ...inputter,
                label: "City",
                key: "city",
                style: { width: "60%" },
              }}
            />

            <BigInput
              inputObject={{
                ...inputter,
                label: "State",
                key: "state",
                style: { width: "30%", marginRight: "2rem" },
              }}
            />

            <BigInput
              inputObject={{
                ...inputter,
                label: "Zip",
                key: "zip",
              }}
            />
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
