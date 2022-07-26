import { useState, useContext, useEffect, useRef } from "react";

import { Hint } from "react-autocomplete-hint";

import { TiDelete } from "react-icons/ti";

import AllInstruments from "../../../../../../store/all-instruments";

import styles from "./OnePart.module.css";

const OnePart = ({ index, part, partDeleter }) => {
  const { allInstruments } = useContext(AllInstruments);

  const { instrument, rank, specialDesignate } = part;

  const deleteClicker = () => {
    partDeleter(index);
  };

  const options = allInstruments.map((instrument) =>
    instrument.name.toLowerCase()
  );

  let printedPart = instrument.name !== null ? instrument.name : "noThang";

  return (
    <div className={styles.outerContainer}>
      <Hint options={options} allowTabFill={true} allowEnterFill={true}>
        <input />
      </Hint>
      <TiDelete className={styles.icon} onClick={deleteClicker} />
    </div>
  );
};

export default OnePart;
