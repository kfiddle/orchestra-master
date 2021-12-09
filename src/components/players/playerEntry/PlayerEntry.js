import { useState, useEffect } from "react";

import ObjectToListHelper from "../../helperFunctions/ObjectToListHelper";
import InstrumentsList from "../../../store/instruments-list";
import InstrumentsDropDown from "../../instruments/InstrumentsDropDown";

import Modal from "../../UI/modal/Modal";
import InputText from "../../input/InputText";
import BigInput from "../../input/BigInput";
import BigInput2 from "../../input/BigInput2";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";
import DoubleObjectPush from "../../helperFunctions/pushFunctions/DoubleObjectPush";

import classes from "./PlayerEntry.module.css";
import FoneInput from "../../input/FoneInput";
import SubOrContractBox from "./SubOrContractBox";
import SubmitDeleteBox from "./SubmitDeleteBox";

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
  const [contract, setContract] = useState({});
  const [clickedThings, setClickedThings] = useState({
    instrumentDropDown: false,
    deleteButton: false,
  });

  const [contracted, setContracted] = useState(false);

  useEffect(() => {
    if (props.player) {
      setPlayer({ ...props.player });

      if (props.player.primaryType === "CONTRACT") {
        setContracted(true);
      } else {
        setContracted(false);
      }
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

  const deleteClickHandler = async (event) => {
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
        : `${player.firstNameArea} ${player.lastName}`
    );

    let partsToSend = clickedInstrumentList.map((part) =>
      part.split(" ").join("")
    );

    let playerToSend = {
      // ...player,
      // firstNameArea: !enteredFirstNameArea
      //   ? props.player.firstNameArea
      //   : enteredFirstNameArea,
      // lastName: !enteredLastName ? props.player.lastName : enteredLastName,
      // contracted,
      // parts: partsToSend,

      firstNameArea: "sandeedd",
      lastName: "cHEEKS",
      type: "CONTRACT",
      rank: 1,
    };

    const sendPlayerOff = async () => {
      let pushFunction = !props.player ? "add-player" : "edit-player";

      let mainPlayerResponse = await PushBasic(playerToSend, pushFunction);

      if (mainPlayerResponse.ok) {
        let playerToSendBack = await mainPlayerResponse.json();

        if (playerToSend.contracted) {
          let contractToSend = {
            ...contract,
            part: partsToSend[0],
            part2: partsToSend[1],
          };
          console.log(contract);
          let contractResponse = await PushBasic(
            contractToSend,
            "add-contract/" + playerToSendBack.id
          );
        }

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

          <SubOrContractBox
            setter={setContracted}
            player={player}
            contracted={contracted}
            contract={contract}
            contractSetter={setContract}
          />
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

// id: "",
// fullName: "",
// email: "",
// homePhone: "",
// cellPhone: "",
// addressLine1: "",
// addressLine2: "",
// city: "",
// state: "",
// zip: "",
// unions: "",
// primaryType: "",
// secondaryType: "NON",
