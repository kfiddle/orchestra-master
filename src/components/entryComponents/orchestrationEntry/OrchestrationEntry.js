import { useState, useContext } from "react";
import Modal from "../../UI/modal/Modal";

import StringAndOthers from "./familyInputs/stringAndOthers/StringAndOthers";
import Extras from "./familyInputs/stringAndOthers/extrasButton/extras/Extras";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import classes from "./OrchestrationEntry.module.css";
import SingleInstrumentInput from "./single_instrument_inputs/SingleInstrumentInput";

const mainInstruments = [
  "FLUTE",
  "OBOE",
  "CLARINET",
  "BASSOON",
  "HORN",
  "TRUMPET",
  "TROMBONE",
  "TUBA",
  "TIMPANI",
  "PERCUSSION",
  "VIOLIN1",
  "VIOLIN2",
  "VIOLA",
  "CELLO",
  "BASS",
];

const OrchestrationEntry = (props) => {
  const [allParts, setAllParts] = useState({});
  const [stringsChecked, setStringsChecked] = useState(true);
  const [extrasClicked, setExtrasClicked] = useState(false);
  const [extras, setExtras] = useState([]);

  const stateList = [allParts, setAllParts];
  const stringsStateStuff = [stringsChecked, setStringsChecked];
  const extrasStateStuff = [extras, setExtras];

  const piece = props.piece;

  const displayableInstruments = mainInstruments.map((instrument) => (
    <SingleInstrumentInput
      key={mainInstruments.indexOf(instrument)}
      instrument={instrument}
      stateList={stateList}
    />
  ));

  const submitOrSetStrings = async () => {
    let primaryChairsToSend = [];

    console.log(extras);

    for (let primaryPart in allParts) {
      for (let chair of allParts[primaryPart]) {
        let parts = [];
        parts.push(primaryPart);

        for (let doubling of chair.doublesObjects) {
          if (doubling.active) {
            parts.push(doubling.secondaryPart);
          }
        }

        let emptyChair = {
          parts: parts,
          rank: chair.rank,
        };
        primaryChairsToSend.push(emptyChair);
      }
    }

    if (stringsChecked) {
      primaryChairsToSend.push(
        { parts: ["VIOLIN1"], rank: 1 },
        { parts: ["VIOLIN2"], rank: 1 },
        { parts: ["VIOLA"], rank: 1 },
        { parts: ["CELLO"], rank: 1 },
        { parts: ["BASS"], rank: 1 }
      );
    }

    if (extras.length > 0) {
      for (let chair of extras) {
        primaryChairsToSend.push(chair);
      }
    }

    let response = await PushBasic(
      primaryChairsToSend,
      "add-empty-chairs/" + piece.id
    );
    if (response.ok) {
      props.closeModal();
    }
  };

  const extrasClicker = () => {
    setExtrasClicked((previous) => !previous);
  };

  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  return (
    <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
      <div className={classes.outerContainer}>
        <div className={classes.inputsDiv}>
          <div className={classes.titleDiv}>
            <h2>{piece.title}</h2>
          </div>

          <div className={classes.inputsContainer}>
            <div className={classes.familyDiv}>
              <div className={classes.label}>WINDS</div>
              {displayableInstruments.slice(0, 4)}
            </div>
            <div className={classes.familyDiv}>
              <div className={classes.label}>Brass</div>

              {displayableInstruments.slice(4, 8)}
            </div>
            <div className={classes.familyDiv}>
              <div className={classes.label}>Percussion</div>

              {displayableInstruments.slice(8, 10)}
            </div>

            <StringAndOthers
              stringsStateStuff={stringsStateStuff}
              extrasStateStuff={extrasStateStuff}
              extrasClicker={extrasClicker}
            />
          </div>
        </div>

        <div className={classes.buttonDiv}>
          <button className={classes.button} onClick={submitOrSetStrings}>
            Submit
          </button>
        </div>
      </div>
      {extrasClicked && <Extras extrasStateStuff={extrasStateStuff} />}
    </Modal>
  );
};

export default OrchestrationEntry;
