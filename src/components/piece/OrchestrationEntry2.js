import { useState, useEffect } from "react";

import classes from "./OrchestrationEntry.module.css";

import Modal from "../UI/modal/Modal";

import BigInput from "../input/BigInput";
import OrchestrationInput from "./OrchestrationInput";
import Enums from '../enums/Enums';

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import DoubleObjectPush from "../helperFunctions/pushFunctions/DoubleObjectPush";
import GetAList from "../helperFunctions/GetAList";

const OrchestrationEntry2 = (props) => {

  const initialEnums = [...Enums];

  let startingObject = {};

  for (let instName of initialEnums) {
    startingObject = { ...startingObject, [instName]: 0 };
  }

  const [instrumentEnumsObject, setInstrumentEnumsObject] =
    useState(startingObject);
  const currentPerformancePiece = props.pp ? props.pp : "";

  const submitOrchestration = async (event) => {
    event.preventDefault();
    let flag = true;

    for (let instEnum in instrumentEnumsObject) {
      for (let j = 0; j < instrumentEnumsObject[instEnum]; j++) {
        const sendItUp = await PushBasic(
          {
            performancePiece: currentPerformancePiece,
            instrumentEnum: instEnum,
          },
          "add-ppp"
        );
        if (!sendItUp.ok) {
          flag = false;
        }
      }
    }
    if (flag) {
      props.closeModal();
    }
  };

  const populator = (event, label) => {
    setInstrumentEnumsObject({
      ...instrumentEnumsObject,
      [label]: +event.target.value,
    });
  };

  const inputter = {
    label: "",
    populator,
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>
            {currentPerformancePiece && currentPerformancePiece.piece.title}
          </h2>
        </div>
        <form className={classes.form}>
          <div>
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Violin 1",
                key: "VIOLIN1",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Violin 2",
                key: "VIOLIN2",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Viola",
                key: "VIOLA",
              }}
            />{" "}
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Cello",
                key: "CELLO",
              }}
            />{" "}
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Bass",
                key: "BASS",
              }}
            />
          </div>
          <div>
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Flute",
                key: "FLUTE",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Piccolo",
                key: "PICCOLO",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Oboe",
                key: "OBOE",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Clarinet",
                key: "CLARINET",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Eb Clarinet",
                key: "EBCLARINET",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Bassoon",
                key: "BASSOON",
              }}
            />
          </div>
          <div>
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Horn",
                key: "HORN",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Trumpet",
                key: "TRUMPET",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Trombone",
                key: "TROMBONE",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Tuba",
                key: "TUBA",
              }}
            />
          </div>
          <div>
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Timpani",
                key: "TIMPANI",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Percussion",
                key: "PERCUSSION",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Harp",
                key: "HARP",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Keyboard",
                key: "KEYBOARD",
              }}
            />
            <OrchestrationInput
              inputObject={{
                ...inputter,
                label: "Piano",
                key: "PIANO",
              }}
            />
          </div>
          <div></div>

          <div className={classes.buttonDiv}>
            {props.pp && (
              <button className={classes.button} onClick={submitOrchestration}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OrchestrationEntry2;
