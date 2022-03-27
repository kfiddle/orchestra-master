import DoublingOption from "./doublingOption/DoublingOption";
import { useState } from "react";

import styles from "./DoublingBox.module.css";
import DoubleOpt from "./doublingOption/DoubleOpt";

const doublingObject = {
  FLUTE: ["PICCOLO", "ALTOFLUTE"],
  OBOE: ["ENGLISHHORN"],
  CLARINET: ["EBCLARINET", "BASSCLARINET"],
  BASSOON: ["CONTRA"],

  HORN: [""],
  TRUMPET: ["CORNET", "FUGALHORN"],
  TROMBONE: ["EUPHONIUM"],
  TUBA: ["EUPHONIUM"],
};

const DoublingBox = (props) => {
  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const chairPartz = props.chairPartz;


  const displayedOptions = doublingObject[primaryPart].map((part) => (

    // <DoublingOption
    //   key={doublingObject[primaryPart].indexOf(part)}
    //   primaryPart={primaryPart}
    //   rank={rank}
    //   part={part}
    //   chairPartz={chairPartz}
    // />

    <DoubleOpt key={part} part={part} chairPartz={chairPartz}/>



  ));

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default DoublingBox;