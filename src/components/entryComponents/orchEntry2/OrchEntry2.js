import { useState } from "react";

import Modal from "../../UI/modal/Modal";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import PercussionBox from "./percussionBox/PercussionBox";
import StringsBox from "./stringsBox/StringsBox";

import FullInstrumentation from "../../../store/full-instrumentation";
import { InstrumentationSubmit } from "../../../store/submit-clicked";
import styles from "./OrchEntry2.module.css";

const winds = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];
const brass = ["HORN", "TRUMPET", "TROMBONE", "TUBA"];

const OrchEntry2 = (props) => {
  const [primariesObject, setPrimariesObject] = useState({});

  const [submitClicked, setSubmitClicked] = useState(false);
  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  const submit = () => {
    setSubmitClicked(true);
    console.log(primariesObject)
  };

  return (
    <FullInstrumentation.Provider value={{primariesObject, setPrimariesObject}}>
      <InstrumentationSubmit.Provider value={{ submitClicked }}>
        <Modal closeModal={props.closeModal} styleObject={orchEntryModalStyles}>
          <div className={styles.outerContainer}>
            <Family instrumentFamily={"WINDS"} list={winds}></Family>
            <Family instrumentFamily={"BRASS"} list={brass}></Family>
            <PercussionBox />
            <StringsBox />

            <div className={styles.SubmitButtonDiv}>
              <SubmitButton submit={submit} />
            </div>
          </div>
        </Modal>
      </InstrumentationSubmit.Provider>
    </FullInstrumentation.Provider>
  );
};

export default OrchEntry2;
