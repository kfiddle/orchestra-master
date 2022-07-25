import { useState, useContext, useEffect, useRef } from "react";

import { Hint } from "react-autocomplete-hint";

import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import AllInstruments from "../../../../../../store/all-instruments";

import Input from "../../../../../input/plainInput/Input";

import styles from "./SinglePartAdjuster.module.css";

const SinglePartAdjuster = ({ part, index, partDeleter, parts, setParts }) => {
  const [instName, setInstName] = useState("");
  const { instrument, rank, specialDesignate } = part;
  const { allInstruments } = useContext(AllInstruments);

  let nameRef = useRef();

  let rankOrDesignate = specialDesignate === 'a'? 'Assist': !rank ? 'Rank or Assist' : rank;

  useEffect(() => {
    if (instrument.name) {
      setInstName(instrument.name.toLowerCase());
    }
  }, []);

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

    setParts([...tempList]);
  };

  const options = allInstruments.map((instrument) =>
    instrument.name.toLowerCase()
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerDiv}>
        <Hint options={options} allowTabFill={true} allowEnterFill={true}>
          <input
            className={styles.input}
            value={instName}
            ref={nameRef}
            placeholder={"enter instrument"}
            onChange={nameFromOnChangeHandler}
          />
        </Hint>
      </div>
      <div className={styles.innerDiv}>
        <input
          className={styles.input}
          placeholder={rankOrDesignate}
          onChange={changeRank}
        ></input>
      </div>
      <div className={styles.innerDiv}>
        <TiDelete className={styles.icon} onClick={deleteClicker} />
      </div>
    </div>
  );
};

export default SinglePartAdjuster;
