import { useState, useContext, useEffect, useRef } from "react";

import { Hint } from "react-autocomplete-hint";

import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import AllInstruments from "../../../../../../store/all-instruments";

import styles from "./OnePart.module.css";

const OnePart = ({ part, index, partDeleter, parts, setParts, partsRef }) => {
  const [instName, setInstName] = useState("");
  const [inputtedRank, setInputtedRank] = useState("");

  const [isValidName, setIsValidName] = useState(true);
  const { instrument, rank, specialDesignate } = part;
  const { allInstruments } = useContext(AllInstruments);

  let nameRef = useRef();

  let inputStyle = isValidName ? styles.input : styles.invalid;

  partsRef.current = {
    ...partsRef.current,
    [index]: { instName, rank: inputtedRank },
  };

  let rankOrDesignate =
    specialDesignate === "a" ? "Assist" : !rank ? "Rank or Assist" : rank;

  useEffect(() => {
    if (instrument.name !== null) {
      setInstName(instrument.name.toLowerCase());
    }

    if (rank !== null) {
      setInputtedRank(rank);
    }
  }, [part]);

  useEffect(() => {
    return () => {
      delete partsRef.current[index];
    };
  }, []);

  const deleteClicker = () => {
    partDeleter(index);
  };

  const changeRank = (event) => {
    setInputtedRank(event.target.value);
    let tempParts = [...parts];
    tempParts[index].rank = event.target.value;
    setParts(tempParts);
  };

  const nameFromOnChangeHandler = (event) => {
    setIsValidName(true);
    setInstName(event.target.value);
    let tempParts = [...parts];
    tempParts[index].instrument.name = event.target.value;
    setParts(tempParts);
  };

  const options = allInstruments.map((instrument) =>
    instrument.name.toLowerCase()
  );

  const isNameValid = () => {
    if (
      allInstruments.filter((inst) => inst.name === instName.toUpperCase())
        .length === 0
    ) {
      setIsValidName(false);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerDiv}>
        <Hint options={options} allowTabFill={true} allowEnterFill={true}>
          <input
            className={inputStyle}
            value={instName}
            ref={nameRef}
            placeholder={instName === "" ? "enter instrument" : instName}
            onChange={nameFromOnChangeHandler}
            onBlur={isNameValid}
          />
        </Hint>
      </div>
      <div className={styles.innerDiv}>
        <input
          className={styles.input}
          placeholder={inputtedRank === "" ? "Rank Or Assistant" : inputtedRank}
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
