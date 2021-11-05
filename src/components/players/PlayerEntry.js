import { useState, useEffect, useRef } from "react";

import ObjectToListHelper from "../helperFunctions/ObjectToListHelper";
import InstrumentsList from "../../store/instruments-list";
import InstrumentsDropDown from "../instruments/InstrumentsDropDown";

import Modal from "../UI/modal/Modal";
import InputText from "../input/InputText";
import BigInput from "../input/BigInput";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PlayerEntry.module.css";
import FoneInput from "../input/FoneInput";
import ExtraTypeBox from "./ExtraTypeBox";
import SubOrContractBox from "./SubOrContractBox";

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
  type: "",
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
  // const [selectedType, setSelectedType] = useState([false, false]);
  const [clickedInstrumentList, setClickedInstrumentList] = useState([]);
  const [clickedThings, setClickedThings] = useState({
    instrumentDropDown: false,
    deleteButton: false,
  });

  const [contracted, setContracted] = useState(false);

  if (props.player) {
    pObject = { ...props.player };
  }

  const [player, setPlayer] = useState(pObject);

  useEffect(() => {
    if (props.player) {
      props.player.type === "CONTRACT"
        ? setContracted(true)
        : setContracted(false);
    }
  }, [props.player]);

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
      type: contracted ? "CONTRACT" : "SUB",
    };

    console.log(playerToSend);

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

  const contractTypeClicked = (contractedOrNot) => {
    setContracted(contractedOrNot);
  };

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

            <div
              onClick={instrumentsClickHandler}
              className={classes.instrumentsButtonDiv}
            >
              <button className={classes.button} type={"button"}>
                Instrument(s)
              </button>
            </div>
          </div>

          {/* <div style={{ position: "absolute", right: "25%", top: "5rem" }}>
            {displayedChosenInstruments}
          </div> */}

          <InstrumentsDropDown showOrHide={clickedThings.instrumentDropDown} />

          <div className={classes.phoneDiv}>
            <FoneInput
              whichType={"homePhone"}
              player={player}
              playerSetter={setPlayer}
              pObject={pObject}
            />
            <FoneInput
              whichType={"cellPhone"}
              player={player}
              playerSetter={setPlayer}
              pObject={pObject}
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

          <SubOrContractBox setter={setContracted} contracted={contracted}/>
          

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
