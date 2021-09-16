import classes from "./OrchestrationEntry.module.css";

import Modal from "../UI/modal/Modal";
import OrchestrationInput from "./OrchestrationInput";

const stringsList = [
  "First Violins",
  "Second Violins",
  "Violas",
  "Celli",
  "Basses",
];
const windsList = ["Flute", "Oboe", "Clarinet", "Eb Clarinet", "Bassoon"];
const brassList = ["Horn", "Trumpet", "Trombone", "Tuba"];

const remainderList = ["Timpani", "Percussion", "Harp", "Piano"];

const OrchestrationEntry = (props) => {
  const stringInputs = stringsList.map((instrument) => (
    <OrchestrationInput key={Math.random()} label={instrument} />
  ));

  const windInputs = windsList.map((instrument) => (
    <OrchestrationInput key={Math.random()} label={instrument} />
  ));

  const brassInputs = brassList.map((instrument) => (
    <OrchestrationInput key={Math.random()} label={instrument} />
  ));

  const remainderInputs = remainderList.map((instrument) => (
    <OrchestrationInput key={Math.random()} label={instrument} />
  ));

  const submitOrchestration = () => {
      console.log("hey")
  }

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <form className={classes.form}>
          <div>{stringInputs}</div>
          <div>{windInputs}</div>
          <div> {brassInputs}</div>
          <div>{remainderInputs}</div>

          <div className={classes.buttonDiv}>
            <button className={classes.button} onClick={submitOrchestration}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OrchestrationEntry;
