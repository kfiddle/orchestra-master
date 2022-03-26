import { useState, useContext, useEffect } from "react";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import useMakeChairs from "../../../../hooks/useMakeChairs";
import Chair from "../chair/Chair";

import styles from "./InstrumentNum.module.css";
import InstButton from "../instButton/InstButton";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [showChairs, setShowChairs] = useState(false);

//   const allChairs = props.allChairs;
//   const setAllChairs = props.setAllChairs;


  const instrument = props.instrument;

  const displayableChairs = [];

  for (let j = 1; j <= number; j++) {
    displayableChairs.push(
      <Chair key={j} part={instrument} rank={j} show={showChairs} />
    );
  }

  const clickHandler = () => {
    props.clicked(instrument, number);
  };

  const setThisInstrument = (number) => {
    setNumber(+number);
  };

  const showInsts = () => {
    setShowChairs(true);
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
      <button onClick={showInsts}>randomButton</button>

      <div>{displayableChairs}</div>
    </div>
  );
};

export default InstrumentNum;
