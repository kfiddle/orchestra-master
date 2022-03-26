import { useState, useContext, useEffect } from "react";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import useMakeChairs from "../../../../hooks/useMakeChairs";
import Chair from "../chair/Chair";

import styles from "./InstrumentNum.module.css";
import InstButton from "../instButton/InstButton";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [chairsList, setChairsList] = useState([]);

  const instrument = props.instrument;
  const family = props.family;
  const showChairs = props.showChairs;

  const displayableChairs = [];

  useEffect(() => {
    const setChairs = () => {
      setChairsList([]);
      let tempList = [];

      for (let j = 1; j <= number; j++) {
        tempList.push(<Chair key={j} part={instrument} rank={j} show={true} />);
      }
      setChairsList(tempList);
    };

    setChairs();
  }, [number]);

  const setThisInstrument = (number) => {
    setNumber(+number);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.instrumentBubble}>
        <div className={styles.labelAndClickerHolder}>{instrument}</div>
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
