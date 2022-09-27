import { useState, useEffect } from "react";

import ObjectToListHelper from "../../../helperFunctions/ObjectToListHelper";
import InstrumentsList from "../../../../store/instruments-list";
import InstrumentsDropDown from "../../../instruments-drop/InstrumentsDropDown";

import Modal from "../../../UI/modal/Modal";
import InputText from "../../../input/InputText";
import BigInput from "../../../input/BigInput";
import BigInput2 from "../../../input/BigInput2";

import useFetch from "../../../../hooks/useFetch";

import classes from "./PlayerEntry.module.css";
import FoneInput from "../../../input/FoneInput";
import SubOrContractBox from "./subOrContractBox/SubOrContractBox";
import SubmitDeleteBox from "../submitDelete/SubmitDeleteBox";

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
  const [clickedInstrumentList, setClickedInstrumentList] = useState([]);
  const [player, setPlayer] = useState({});
  const [clickedThings, setClickedThings] = useState({
    instrumentDropDown: false,
    deleteButton: false,
  });

  const pusher = useFetch();

  useEffect(() => {
    if (props.player) {
      setPlayer({ ...props.player });
      setClickedInstrumentList([...props.player.instruments]);
    }
  }, [props.player]);


  const instrumentsClickHandler = () => {
    setClickedThings({
      ...clickedThings,
      instrumentDropDown: !clickedThings.instrumentDropDown,
    });
  };

  const deleteClickHandler = async (event) => {
    event.preventDefault();

    setClickedThings({
      ...clickedThings,
      deleteButton: !clickedThings.deleteButton,
    });

    if (clickedThings.deleteButton) {
      const response = await pusher(props.player, "delete-player");

      if (response !== "phoey") {
        props.closeModal();
      }
    }
  };

  const submitPlayer = async (event) => {
    event.preventDefault();

    const { enteredFirstNameArea, enteredLastName } = nameMaker(
      player.fullName
        ? player.fullName
        : `${player.firstNameArea} ${player.lastName}`
    );

    let playerToSend = {
      ...player,
      firstNameArea: !enteredFirstNameArea
        ? props.player.firstNameArea
        : enteredFirstNameArea,
      lastName: !enteredLastName ? props.player.lastName : enteredLastName,
      instruments: clickedInstrumentList,
    };

    const sendPlayerOff = async () => {
      let pushFunction = !props.player ? "add-player" : "edit-player";

      let mainPlayerResponse = await pusher(playerToSend, pushFunction);
      if (mainPlayerResponse !== "phoey") {
        props.closeModal();
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

  const inputter = { label: "", key: "", populator, pObject: player };
  const state = { player, setPlayer };

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
                props.player && `${player.firstNameArea} ${player.lastName}`
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

          <InstrumentsDropDown showOrHide={clickedThings.instrumentDropDown} />

          <div className={classes.phoneDiv}>
            <FoneInput
              whichType={"homePhone"}
              player={player}
              playerSetter={setPlayer}
            />
            <FoneInput
              whichType={"cellPhone"}
              player={player}
              playerSetter={setPlayer}
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
            <BigInput2
              shebang={{
                label: "City",
                key: "city",
                state,
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

          <SubOrContractBox player={player} setPlayer={setPlayer} />
          <SubmitDeleteBox
            o={{
              submitPlayer,
              deleteClicked: clickedThings.deleteButton,
              deleteClickHandler,
              ifPlayer: props.player,
            }}
          />
        </form>
      </Modal>
    </InstrumentsList.Provider>
  );
};

export default PlayerEntry;
