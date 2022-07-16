import { useState, useContext } from "react";

import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import AllInstruments from "../../../../../../store/all-instruments";

import Input from "../../../../../input/plainInput/Input";

import styles from "./SinglePartAdjuster.module.css";

const SinglePartAdjuster = ({ part, index, partDeleter }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { instrument, rank, specialDesignate } = part;
  const instName = instrument.name;
  const { allInstruments } = useContext(AllInstruments);
  console.log(allInstruments);

  let rankOrDesignate;

  specialDesignate === "a"
    ? (rankOrDesignate = "Assist")
    : (rankOrDesignate = rank);

  const deleteClicker = () => {
    partDeleter(index);
  };

  const togglePlaceHolder = () => {
    setIsFocused((previous) => !previous);
  };

  const nameTyping = (incomingFragment) => {
    console.log(incomingFragment);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerDiv}>
        {/* <input
          className={styles.input}
          placeholder={isFocused ? "" : instName}
          onFocus={togglePlaceHolder}
        ></input> */}

        <Input placeholder={"instrument"} nameTyping={nameTyping} />
      </div>
      <div className={styles.innerDiv}>
        <input className={styles.input} placeholder={rankOrDesignate}></input>
      </div>
      <div className={styles.innerDiv}>
        <TiDelete className={styles.icon} onClick={deleteClicker} />
      </div>
    </div>
  );
};

export default SinglePartAdjuster;
