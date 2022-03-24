import { useState, useContext, useEffect } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import FullInstrumentation from "../../../../store/full-instrumentation";

import ChairsHolder from "../../../../store/chairs-holder";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import NumberInput from "../../../input/numberInput/NumberInput";

import useMakeChairs from "../../../../hooks/useMakeChairs";

import styles from "./InstrumentNum.module.css";

const InstrumentNum = (props) => {
  const [number, setNumber] = useState("");

  const { allChairs, setAllChairs } = useContext(ChairsHolder);
  const { primariesObject, setPrimariesObject } =
    useContext(FullInstrumentation);
  const { submitClicked } = useContext(InstrumentationSubmit);
  const { alternateClicked } = useContext(AlternateClicked);

  const instrument = props.instrument;

  const chairs = useMakeChairs(instrument, number);

  useEffect(() => {
    if (submitClicked) {
      //   let tempObject = primariesObject;
      //   tempObject[instrument] = number;
      //   setPrimariesObject(tempObject);
      //   console.log(primariesObject)
      console.log(chairs);
    }
    if (alternateClicked) {
      let tempObject = primariesObject;
      tempObject[instrument] = number;
      setPrimariesObject(tempObject);

      let tempChairsList = allChairs;
      tempChairsList.push.apply(tempChairsList, chairs);
      setAllChairs(tempChairsList)
    }
  }, [submitClicked, alternateClicked]);

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
