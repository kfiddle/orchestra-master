import { useState, useContext, useEffect } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const { submitClicked } = useContext(InstrumentationSubmit);
  const { alternateClicked, primariesObject, setPrimariesObject } =
    useContext(AlternateClicked);
  const instrument = props.instrument;

  useEffect(() => {
    if (submitClicked) {
      let tempObject = primariesObject;
      tempObject[instrument] = number;
      setPrimariesObject(tempObject);
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
    for (let object in primariesObject) {
      console.log(primariesObject[object]);
    }
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
