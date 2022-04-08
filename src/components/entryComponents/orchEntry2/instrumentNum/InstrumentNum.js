import { useState, useEffect } from "react";

import NumberInput from "../../../input/numberInput/NumberInput";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";
import Extras from "../auxiliaries/Extras";

import Chair from "../chair/Chair";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [chairsList, setChairsList] = useState([]);

  const instrument = props.instrument;
  const showChairs = props.showChairs;

  const { extras } = DoublingExtras();

  useEffect(() => {
    const setChairs = () => {
      setChairsList([]);
      let tempList = [];

      for (let j = 1; j <= number; j++) {
        tempList.push(<Chair key={j} part={instrument} rank={j} />);
      }
      setChairsList(tempList);
    };

    setChairs();
  }, [number, showChairs]);

  const setThisInstrument = (number) => {
    setNumber(+number);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instrumentBubble}>
        <div className={styles.labelAndClickerHolder}>
          <div className={styles.labelHolder}>{instrument}</div>
        </div>
        <NumberInput
          type={"text"}
          numberSetter={setThisInstrument}
          number={number}
        ></NumberInput>
      </div>
      <div className={styles.chairsAndExtrasDiv}>
        <div>{showChairs && <div>{chairsList}</div>}</div>
      </div>
    </div>
  );
};

export default InstrumentNum;
