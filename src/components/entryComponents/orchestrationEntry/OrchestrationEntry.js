import { useState } from "react";
import Modal from "../../UI/modal/Modal";

import FamilyInputs from "./familyInputs/FamilyInputs";

import StringInputs from "./familyInputs/stringInputs/StringInputs";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import classes from "./OrchestrationEntry.module.css";
import SingleInstrumentInput from "./familyInputs/single-instrument-input/SingleInstrumentInput";

const instruments = [
  "Flute",
  "Oboe",
  "Clarinet",
  "Bassoon",
  "Horn",
  "Trumpet",
  "Trombone",
  "Tuba",
  "timpani",
  "others",
  "violin1",
  "violin2",
  "viola",
  "cello",
  "bass",
];
const OrchestrationEntry = (props) => {
  const [scoreLines, setScoreLines] = useState({});
  const stateList = [scoreLines, setScoreLines];

  const piece = props.piece;

  const displayableInstruments = instruments.map((instrument) => (
    <SingleInstrumentInput
      key={instruments.indexOf(instrument)}
      instrument={instrument}
      stateList={stateList}
    />
  ));

  const submitOrchestration = async () => {
    let scoreLinesToSend = {scoreLines: []};

    for (let scoreLine in scoreLines) {
      scoreLinesToSend.scoreLines.push({primaryPart: scoreLine, rank: +scoreLines[scoreLine]})
    }

    let response = await PushBasic(
      scoreLinesToSend,
      "add-all-scorelines/" + piece.id
    );
    if (response.ok) {
      props.closeModal();
    }
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

              {displayableInstruments.slice(8, 12)}
            </div>

            <StringInputs stateList={stateList} />
          </div>
        </div>

        <div className={classes.buttonDiv}>
          <button className={classes.button} onClick={submitOrchestration}>
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default OrchestrationEntry;
