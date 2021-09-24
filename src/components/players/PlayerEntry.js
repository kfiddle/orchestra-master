import { useState, useEffect, useRef } from "react";

import InstrumentToListHelper from "../helperFunctions/InstrumentToListHelper";
import InstrumentsList from "../../store/instruments-list";
import InstrumentsDropDown from "../instruments/InstrumentsDropDown";

import Modal from "../UI/modal/Modal";
import InputText from "../input/InputText";
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

    console.log(player);
  }, [props.player]);

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
              <h3>Instrument</h3>
            </div>
          </div>

          {clickedThings.instrumentDropDown && <InstrumentsDropDown />}

          <div className={classes.phoneDiv}>
            <InputText
              label={"Home Phone"}
              onChange={(event) =>
                setPlayer({ ...player, homePhone: event.target.value })
              }
              placeholder={pObject.homePhone}
            />

            <InputText
              label={"Cell Phone"}
              onChange={(event) =>
                setPlayer({ ...player, cellPhone: event.target.value })
              }
              placeholder={pObject.cellPhone}
            />
          </div>

          <InputText
            label={"Email"}
            onChange={(event) =>
              setPlayer({ ...player, email: event.target.value })
            }
            placeholder={pObject.email}
            style={{ width: "90%" }}
          />

          <InputText
            label={"Address Line 1"}
            onChange={(event) =>
              setPlayer({ ...player, addressLine1: event.target.value })
            }
            placeholder={pObject.addressLine1}
          />

          <InputText
            label={"Address Line 2"}
            onChange={(event) =>
              setPlayer({ ...player, addressLine2: event.target.value })
            }
            placeholder={pObject.addressLine2}
          />

          <div className={classes.cityStateDiv}>
            <InputText
              label={"City"}
              onChange={(event) =>
                setPlayer({ ...player, city: event.target.value })
              }
              placeholder={pObject.city}
              style={{ width: "60%", marginRight: "2rem" }}
            />

            <InputText
              label={"State"}
              ref={stateRef}
              onChange={(event) =>
                setPlayer({ ...player, state: event.target.value })
              }
              placeholder={pObject.state}
              style={{ width: "10%", marginRight: "2rem" }}
            />

            <InputText
              label={"Zip"}
              ref={zipRef}
              onChange={(event) =>
                setPlayer({ ...player, zip: event.target.value })
              }
              placeholder={pObject.zip}
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
