import { useState, useContext, useEffect } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const { submitClicked } = useContext(InstrumentationSubmit)
  const {alternateClicked, primaries, setPrimaries} = useContext(AlternateClicked)
  const instrument = props.instrument;

  useEffect(() => {
    if (submitClicked) {
        let tempObject = primaries;
        tempObject[instrument] = number;
        setPrimaries(tempObject)
        console.log(instrument + '   ' + number)
    }


  }, [submitClicked]);

  const clickHandler = () => {
    props.clicked(instrument, number);
  };

  const setThisInstrument = (number) => {
   setNumber(+number)
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
