import { useState } from "react";

import Modal from "../../UI/modal/Modal";
import SubmitButton from "../../UI/submitButton/SubmitButton";

import Family from "./family/Family";
import PercussionBox from "./percussionBox/PercussionBox";
import StringsBox from "./stringsBox/StringsBox";

import FullInstrumentation from "../../../store/full-instrumentation";

import ChairsHolder from "../../../store/chairs-holder";
import { InstrumentationSubmit } from "../../../store/submit-clicked";
import styles from "./OrchEntry2.module.css";

const winds = ["FLUTE", "OBOE", "CLARINET", "BASSOON"];
const brass = ["HORN", "TRUMPET", "TROMBONE", "TUBA"];

const OrchEntry2 = (props) => {
  const [allChairs, setAllChairs] = useState([]);

  const [primariesObject, setPrimariesObject] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const orchEntryModalStyles = { width: "80vw", top: "5vh" };

  const submit = () => {
    setSubmitClicked(true);
    console.log(allChairs);
  };

  return (
    <FullInstrumentation.Provider
      value={{ primariesObject, setPrimariesObject }}
    >
      <ChairsHolder.Provider value = {{allChairs, setAllChairs}}>
        <InstrumentationSubmit.Provider value={{ submitClicked }}>
          <Modal
            closeModal={props.closeModal}
            styleObject={orchEntryModalStyles}
          >
            <div className={styles.outerContainer}>
              <Family familyLabel={"WINDS"} list={winds}></Family>
              <Family familyLabel={"BRASS"} list={brass}></Family>
              <PercussionBox />
              <StringsBox />

              <div className={styles.SubmitButtonDiv}>
                <SubmitButton submit={submit} />
              </div>
            </div>
          </Modal>
        </InstrumentationSubmit.Provider>
      </ChairsHolder.Provider>
    </FullInstrumentation.Provider>
  );
};

export default OrchEntry2;
