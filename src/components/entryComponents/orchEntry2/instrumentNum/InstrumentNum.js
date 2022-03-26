import { useState, useContext, useEffect } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import FullInstrumentation from "../../../../store/full-instrumentation";

import ChairsHolder from "../../../../store/chairs-holder";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import useMakeChairs from "../../../../hooks/useMakeChairs";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");

  const instrument = props.instrument;

  const chairs = useMakeChairs(instrument, number);

 
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
