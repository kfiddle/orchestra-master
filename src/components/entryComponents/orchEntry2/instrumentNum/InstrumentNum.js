import { useState, useContext, useEffect } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const {alternateClicked} = useContext(AlternateClicked)
  const instrument = props.instrument;

  useEffect(() => {
    if (alternateClicked) {
      console.log(instrument + '   ' +  number)
    }


  }, [alternateClicked]);

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
