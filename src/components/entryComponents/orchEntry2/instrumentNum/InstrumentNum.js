import { useState, useEffect } from "react";

import NumberInput from "../../../input/numberInput/NumberInput";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";
import Extras from "../auxiliaries/Extras";

import Chair from "../chair/Chair";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [chairsList, setChairsList] = useState([]);
  const [showExtras, setShowExtras] = useState(false);

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

  const extrasClickHandler = () => {
    setShowExtras((previous) => !previous);
    console.log(extras[instrument]);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instrumentBubble}>
        <div
          className={styles.labelAndClickerHolder}
          onClick={extrasClickHandler}
        >
          {instrument}
        </div>
        <NumberInput
          type={"text"}
          numberSetter={setThisInstrument}
          number={number}
        ></NumberInput>
      </div>
      <div className={styles.chairsAndExtrasDiv}>
        <div>{showChairs && <div>{chairsList}</div>}</div>
        <div>
          {showExtras && <Extras instrumentList={extras[instrument]} />}
        </div>

      </div>
    </div>
  );
};

export default InstrumentNum;
