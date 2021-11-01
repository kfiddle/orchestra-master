import { useState, useEffect, useRef } from "react";

import ObjectToListHelper from "../helperFunctions/ObjectToListHelper";
import InstrumentsList from "../../store/instruments-list";
import InstrumentsDropDown from "../instruments/InstrumentsDropDown";

import Modal from "../UI/modal/Modal";
import InputText from "../input/InputText";
import BigInput from "../input/BigInput";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PlayerEntry.module.css";

let pObject = {
  id: "",
  fullName: "",
  email: "",
  homePhone: "",
  cellPhone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zip: "",
  unions: "",
  type:'',
};

const nameMaker = (fullEnteredName) => {
  if (!fullEnteredName) {
    return;
  }
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

  const contractedRef = useRef();
  const subRef = useRef();

  const instrumentsClickHandler = () => {
    setClickedThings({
      ...clickedThings,
      instrumentDropDown: !clickedThings.instrumentDropDown,
    });
  };

  const displayedChosenInstruments = clickedInstrumentList.map((instrument) => (
    <div key={Math.random()}>
      <h2 style={{ fontSize: "1.5rem" }}>{instrument.name}</h2>
    </div>
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
      player.fullName
        ? player.fullName
        : `${pObject.firstNameArea} ${pObject.lastName}`
    );

    let playerToSend = {
      ...player,
      firstNameArea: !enteredFirstNameArea
        ? props.player.firstNameArea
        : enteredFirstNameArea,
      lastName: !enteredLastName ? props.player.lastName : enteredLastName,
      type: selectedType[0] === true ? "CONTRACT" : "SUB",
    };

    console.log(playerToSend)


    const sendPlayerOff = async () => {
      let flag = true;
      let pushFunction = !props.player ? "add-player" : "edit-player";

      let mainPlayerResponse = await PushBasic(playerToSend, pushFunction);
      if (mainPlayerResponse.ok) {
        let playerToSendBack = await mainPlayerResponse.json();
        clickedInstrumentList.forEach(async (instrument, index) => {
          let ip = {
            player: playerToSendBack,
            instrument: instrument,
            rank: index,
          };
          let playerInstrumentResponse = await PushBasic(ip, "add-instruments");
          if (!playerInstrumentResponse.ok) {
            flag = false;
          }
        });
        if (flag) {
          props.closeModal();
        }
      }
    };
    setTimeout(sendPlayerOff, 200);
  };

  const instrumentToList = (instrument) => {
    ObjectToListHelper(
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
                setPlayer({ ...player, fullName: event.target.value })
              }
              placeholder={
                props.player && `${pObject.firstNameArea} ${pObject.lastName}`
              }
              style={{ width: "50%" }}
            />

            <div onClick={instrumentsClickHandler} className={classes.instrumentsButtonDiv}>
              <button className={classes.button} type={"button"}>
                Instrument(s)
              </button>
            </div>
          </div>

          <div style={{ position: "absolute", right: "25%", top: "5rem" }}>
            {displayedChosenInstruments}
          </div>

          <InstrumentsDropDown showOrHide={clickedThings.instrumentDropDown} />

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

          <BigInput
            inputObject={{
              ...inputter,
              label: "Unions",
              key: "unions",
            }}
          />

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
              {selectedType[1] === true && <h2>I'm a SUB, soon to have a ranking</h2>}
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
