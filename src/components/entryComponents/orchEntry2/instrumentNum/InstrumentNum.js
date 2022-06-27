import { useState, useEffect, useContext } from "react";

import NumberInput from "../../../input/numberInput/NumberInput";

import DoublingExtras from "../../../helperFunctions/DoublingExtras";
import Extras from "../auxiliaries/Extras";

import Chair from "../chair/Chair";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

import styles from "./InstrumentNum.module.css";
import useMakeChairs from "../../../../hooks/useMakeChairs";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");
  const [chairsList, setChairsList] = useState([]);
  const { pieceOrShow, object, submitClicked } = useContext(OrchEntry2FormStore);

  const instrument = props.instrument;
  const showChairs = props.showChairs;

  const { extras } = DoublingExtras();

  const ourChairs = useMakeChairs(instrument, number, submitClicked, {
    pieceOrShow,
    object,
  });

  const setThisInstrument = (number) => {
    setNumber(+number);
  };

  const chairsDivClass = showChairs
    ? styles.visibleChairs
    : styles.hiddenChairs;

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
        <div className={chairsDivClass}>{ourChairs}</div>
      </div>
    </div>
  );
};

export default InstrumentNum;
