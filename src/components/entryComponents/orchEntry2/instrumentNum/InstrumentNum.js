import { useState, useContext, useEffect } from "react";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import useMakeChairs from "../../../../hooks/useMakeChairs";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");

  const allChairs = props.allChairs;
  const setAllChairs = props.setAllChairs;

  const instrument = props.instrument;

  const chairs = useMakeChairs(instrument, number);

  useEffect(() => {
    let tempChairs = allChairs;
    tempChairs.push.apply(tempChairs, chairs);
    setAllChairs(tempChairs);
  }, [chairs]);

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
