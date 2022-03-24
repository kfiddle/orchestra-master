import { useState, useContext, useEffect } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import FullInstrumentation from "../../../../store/full-instrumentation";
import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");

  const { primariesObject, setPrimariesObject } = useContext(FullInstrumentation);
  const { submitClicked } = useContext(InstrumentationSubmit);
  const { alternateClicked } = useContext(AlternateClicked);

  const instrument = props.instrument;

  useEffect(() => {
    if (submitClicked) {
      let tempObject = primariesObject;
      tempObject[instrument] = number;
      setPrimariesObject(tempObject);
      console.log(primariesObject)
    }
    if (alternateClicked) {
      let tempObject = primariesObject;
      tempObject[instrument] = number;
      setPrimariesObject(tempObject);
    }
  }, [submitClicked, alternateClicked]);

  const clickHandler = () => {
    props.clicked(instrument, number);
  };

  const setThisInstrument = (number) => {
    setNumber(+number);
  };

  return (
    <div className={styles.instrumentBubble}>
      <div className={styles.labelAndClickerHolder} onClick={clickHandler}>
        {instrument}
      </div>
      <NumberInput
        type={"text"}
        numberSetter={setThisInstrument}
        number={number}
      ></NumberInput>
    </div>
  );
};

export default InstrumentNum;
