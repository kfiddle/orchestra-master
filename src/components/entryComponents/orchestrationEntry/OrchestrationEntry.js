import { useState, useContext } from "react";
import Modal from "../../UI/modal/Modal";

import StringInputs from "./familyInputs/stringInputs/StringInputs";

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
  "tIMPANI",
  "OTHERS",
  "VIOLIN1",
  "VIOLIN2",
  "VIOLA",
  "CELLO",
  "BASS",
];

const OrchestrationEntry = (props) => {
  const [allParts, setAllParts] = useState({});
  const stateList = [allParts, setAllParts];

  const piece = props.piece;

  const displayableInstruments = mainInstruments.map((instrument) => (
    <SingleInstrumentInput
      key={mainInstruments.indexOf(instrument)}
      instrument={instrument}
      stateList={stateList}
    />
  ));

  const submitOrchestration = async () => {


    let primaryChairsToSend = [];

    // for (let primaryPart in allParts) {
    //   for (let chair of allParts[primaryPart]) {
    //     let doublings = [];
    //     for (let doubling of chair.doublesObjects) {
    //       if (doubling.active) {
    //         doublings.push(doubling.secondaryPart);
    //       }
    //     }

    //     let emptyChair = {
    //       primaryPart: primaryPart,
    //       rank: chair.rank,
    //       secondaryPart: doublings[0] != null ? doublings[0] : null,
    //       thirdPart: doublings[1] != null ? doublings[1] : null,
    //     };
    //     primaryChairsToSend.push(emptyChair);
    //   }
    // }

    // let response = await PushBasic(
    //   primaryChairsToSend,
    //   "add-all-empty-chairs/" + piece.id
    // );
    // if (response.ok) {
    //   let printable = await response.json();
    //   console.log(printable);
    // }
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
