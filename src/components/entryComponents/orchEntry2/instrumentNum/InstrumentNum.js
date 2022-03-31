import { useState, useEffect } from "react";

import NumberInput from "../../../input/numberInput/NumberInput";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";
import Extras from "../auxiliaries/Extras";

import Chair from "../chair/Chair";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [chairsList, setChairsList] = useState([]);
  const [labelToExtras, setLabelToExtras] = useState(false);
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
  };

  const flipLabel = () => {
    setLabelToExtras((previous) => !previous);
  };

  const label = !labelToExtras ? instrument : "EXTRAS?";

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instrumentBubble}>
        <div
          className={styles.labelAndClickerHolder}
          //   onMouseEnter={flipLabel}
          //   onMouseLeave={flipLabel}
          onClick={extrasClickHandler}
        >
          <div className={styles.labelHolder}>{label}</div>
        </div>
        <NumberInput
          type={"text"}
          numberSetter={setThisInstrument}
          number={number}
        ></NumberInput>
      </div>
      <div className={styles.chairsAndExtrasDiv}>
        <div>{showChairs && <div>{chairsList}</div>}</div>
        {/* <div>{showExtras && <Extras instrument={instrument} />}</div> */}
        <Extras instrument={instrument} />
      </div>
    </div>
  );
};

export default InstrumentNum;
