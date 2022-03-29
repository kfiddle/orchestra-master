import { useState } from "react";

import styles from "./DoublingBox.module.css";
import DoubleOpt from "./doublingOption/DoubleOpt";
import DoublingExtras from "../../../../helperFunctions/DoublingExtras";

const DoublingBox = (props) => {
  const primaryPart = props.primaryPart;
  const rank = props.rank;
  const chairPartz = props.chairPartz;

  const { doubling } = DoublingExtras();

  const displayedOptions = doubling[primaryPart].map((part) => (
    <DoubleOpt key={part} part={part} chairPartz={chairPartz} />
  ));

  return <div className={styles.outerContainer}>{displayedOptions}</div>;
};

export default DoublingBox;
