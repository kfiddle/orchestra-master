import { useState, useContext, useEffect, useRef } from "react";

import { Hint } from "react-autocomplete-hint";

import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import AllInstruments from "../../../../../../store/all-instruments";

import styles from "./OnePart.module.css";

const OnePart = ({ part, index, partDeleter, parts, setParts }) => {
  const [printedRank, setPrintedRank] = useState("rank or assist");
  const [instName, setInstName] = useState("");
  const { instrument, rank, specialDesignate } = part;
  const { allInstruments } = useContext(AllInstruments);

  let nameRef = useRef();


  let rankOrDesignate =
    specialDesignate === "a" ? "Assist" : !rank ? "Rank or Assist" : rank;

  useEffect(() => {
    if (instrument.name !== null) {
      setInstName(instrument.name.toLowerCase());
    }

    if (rank !== null) {
      setPrintedRank(rank);
    }
  }, [part]);

  const deleteClicker = () => {
    partDeleter(index);
  };

  const changeRank = (event) => {
    let tempList = [...parts];
    tempList[index].rank = +event.target.value;
    setParts([...tempList]);
  };

  const nameFromOnChangeHandler = (event) => {
    setInstName(event.target.value);
    let tempList = [...parts];
    tempList[index].instrument = allInstruments.filter(
      (inst) => inst.name === event.target.value.toUpperCase()
    )[0];

  };

  const options = allInstruments.map((instrument) =>
    instrument.name.toLowerCase()
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerDiv}>
        {/* <label>{instName}</label> */}
        <Hint options={options} allowTabFill={true} allowEnterFill={true}>
          <input
            className={styles.input}
            value={instName}
            ref={nameRef}
            placeholder={instName === ''? 'enter instrument' : instName}
            onChange={nameFromOnChangeHandler}
          />
        </Hint>
      </div>
      <div className={styles.innerDiv}>
        <input
          className={styles.input}
          placeholder={printedRank}
          onChange={changeRank}
        ></input>
      </div>
      <div className={styles.innerDiv}>
        <TiDelete className={styles.icon} onClick={deleteClicker} />
      </div>
    </div>
  );
};

export default OnePart;
