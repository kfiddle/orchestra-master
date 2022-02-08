import DoublingOption from "./doublingOption/DoublingOption";
import { useState } from "react";

import styles from "./DoublingBox.module.css";

const doublingOptionsObject = {
  Flute: ["PICCOLO", "ALTOFLUTE"],
  Oboe: ["ENGLISHHORN"],
  Clarinet: ["EBCLARINET", "BASSCLARINET"],
  Bassoon: ["CONTRA"],
  Horn: [""],
  Trumpet: [""],
  Trombone: [],
  Tuba: [],
};


const DoublingBox = (props) => {
  const primaryInstrument = props.instrument;
  const rank = props.rank;
  const [clickedOption, setClickedOption] = useState("");

 
  const clickedOptionHandler = (option) => {
    console.log(option);
  };

  console.log(clickedOption);

  const displayedOptions = doublingOptionsObject[primaryInstrument].filter(
    (partObject) => (
      <DoublingOption
        key={Math.random()}
        instrumentName={partObject.instrumentName}
        activeOption={clickedOptionHandler}
      />
    )
  );

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default DoublingBox;
