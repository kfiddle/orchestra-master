import { useState, useEffect } from "react";

import NumberInput from "../../../input/numberInput/NumberInput";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";

import Chair from "../chair/Chair";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [chairsList, setChairsList] = useState([]);

  const instrument = props.instrument;
  const family = props.family;
  const showChairs = props.showChairs;

  useEffect(() => {
    const setChairs = () => {
      setChairsList([]);
      let tempList = [];

      for (let j = 1; j <= number; j++) {
        tempList.push(
          <Chair key={j} part={instrument} rank={j} display={showChairs} />
        );
      }
      setChairsList(tempList);
    };

    setChairs();
  }, [number, showChairs]);

  const setThisInstrument = (number) => {
    setNumber(+number);
  };

  const showExtras = () => {
    const { extras } = DoublingExtras();
    console.log(extras[instrument]);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instrumentBubble}>
        <div className={styles.labelAndClickerHolder} onClick={showExtras}>
          {instrument}
        </div>
        <NumberInput
          type={"text"}
          numberSetter={setThisInstrument}
          number={number}
        ></NumberInput>
      </div>
      <div>{chairsList}</div>
    </div>
  );
};

export default InstrumentNum;
