import { useState } from "react";
import Modal from "../../UI/modal/Modal";

// import FamilyInputs from "./familyInputs/FamilyInputs";

import StringInputs from "./familyInputs/stringInputs/StringInputs";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import classes from "./OrchestrationEntry.module.css";
import SingleInstrumentInput from "./single_instrument_inputs/SingleInstrumentInput";

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
  const [primaryParts, setPrimaryParts] = useState({});
  const [secondaryParts, setSecondaryParts] = useState([]);
  const stateList = [
    primaryParts,
    setPrimaryParts,
    secondaryParts,
    setSecondaryParts,
  ];

  const piece = props.piece;

  const displayableInstruments = instruments.map((instrument) => (
    <SingleInstrumentInput
      key={instruments.indexOf(instrument)}
      instrument={instrument}
      stateList={stateList}
    />
  ));

  const submitOrchestration = async () => {
    let primaryChairsToSend = [];

    for (let primaryPart in primaryParts) {
      for (let j = 1; j <= primaryParts[primaryPart]; j++) {
        primaryChairsToSend.push({
          primaryPart: primaryPart,
          rank: j,
        });
      }
    }

    console.log(primaryChairsToSend);

    let response = await PushBasic(
      primaryChairsToSend,
      "add-all-empty-chairs/" + piece.id
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
