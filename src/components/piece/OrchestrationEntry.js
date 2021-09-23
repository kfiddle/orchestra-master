import { useState, useRef } from "react";

import classes from "./OrchestrationEntry.module.css";

import Modal from "../UI/modal/Modal";
import OrchestrationInput from "./OrchestrationInput";
import Input from "../input/Input";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import DoubleObjectPush from "../helperFunctions/pushFunctions/DoubleObjectPush";

const OrchestrationEntry = (props) => {
  // let objectToSend = {
  //   piece: props.piece,
  //   firstViolins: 0,
  //   secondViolins: 0,
  //   violas: 0,
  //   celli: 0,
  //   basses: 0,

  //   flute: 0,
  //   oboe: 0,
  //   clarinet: 0,
  //   eBClarinet: 0,
  //   bassoon: 0,

  //   horn: 0,
  //   trumpet: 0,
  //   trombone: 0,
  //   tuba: 0,

  //   timpani: 0,
  //   percussion: 0,
  //   harp: 0,
  //   piano: 0,
  // };

  const firstViolinsRef = useRef();
  const secondViolinsRef = useRef();
  const violasRef = useRef();
  const celliRef = useRef();
  const bassesRef = useRef();

  const fluteRef = useRef();
  const oboeRef = useRef();
  const clarinetRef = useRef();
  const eBClarinetRef = useRef();
  const bassoonRef = useRef();

  const hornRef = useRef();
  const trumpetRef = useRef();
  const tromboneRef = useRef();
  const tubaRef = useRef();

  const timpaniRef = useRef();
  const percussionRef = useRef();
  const harpRef = useRef();
  const pianoRef = useRef();

  // let displayIns = [];

  // const enterFunction = (label, number) => {
  //   objectToSend[label] = number;
  // };

  // for (let key in objectToSend) {
  //   displayIns.push(
  //     <OrchestrationInput label={key} enterFunction={enterFunction} />
  //   );
  // }

  const submitOrchestration = async (event) => {
    event.preventDefault();

    let objectToSend = {
      piece: props.piece,
      firstViolins: firstViolinsRef.current.value,
      secondViolins: firstViolinsRef.current.value,
      violas: firstViolinsRef.current.value,
      cellos: firstViolinsRef.current.value,
      basses: bassesRef.current.value,

      flutes: fluteRef.current.value,
      oboes: oboeRef.current.value,
      clarinets: clarinetRef.current.value,
      ebClarinets: eBClarinetRef.current.value,
      bassoons: bassoonRef.current.value,

      horns: hornRef.current.value,
      trumpets: trumpetRef.current.value,
      trombones: tromboneRef.current.value,
      tubas: tubaRef.current.value,

      timpanis: timpaniRef.current.value,
      percussions: percussionRef.current.value,
      pianos: pianoRef.current.value,
      harps: harpRef.current.value,
    };

    let response = await PushBasic(objectToSend, "set-roster");
    if (response.ok) {
      props.closeModal();
    }
  };

  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.outerContainer}>
        <div className={classes.titleDiv}>
          <h2>{props.piece.title}</h2>
        </div>
        <form className={classes.form}>
          <div>
            {/* <div>{displayIns.slice(0, 5)}</div>
          <div>{displayIns.slice(5, 10)}</div>
          <div>{displayIns.slice(10, 14)}</div>
          <div>{displayIns.slice(14)}</div> */}

            <OrchestrationInput label={"First Violins"} ref={firstViolinsRef} />
            <OrchestrationInput
              label={"Second Violins"}
              ref={secondViolinsRef}
            />
            <Input label={"Violas"} type="number" ref={violasRef} />
            <OrchestrationInput label={"Celli"} ref={celliRef} />
            <OrchestrationInput label={"Basses"} ref={bassesRef} />
          </div>
          <div>
            <OrchestrationInput label={"Flute"} ref={fluteRef} />
            <OrchestrationInput label={"Oboe"} ref={oboeRef} />
            <OrchestrationInput label={"Clarinet"} ref={clarinetRef} />
            <OrchestrationInput label={"Eb Clarinet"} ref={eBClarinetRef} />
            <OrchestrationInput label={"Bassoon"} ref={bassoonRef} />
          </div>
          <div>
            <OrchestrationInput label={"Horn"} ref={hornRef} />
            <OrchestrationInput label={"Trumpet"} ref={trumpetRef} />
            <OrchestrationInput label={"Trombone"} ref={tromboneRef} />
            <OrchestrationInput label={"Tuba"} ref={tubaRef} />
          </div>
          <div className={classes.percussionDiv}>
            <OrchestrationInput label={"Timpani"} ref={timpaniRef} />
            <OrchestrationInput label={"Percussion"} ref={percussionRef} />
            <OrchestrationInput label={"Harp"} ref={harpRef} />
            <OrchestrationInput label={"Piano"} ref={pianoRef} />
          </div>

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
