import { useState, useContext, useEffect } from "react";

import { Hint } from "react-autocomplete-hint";

import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

import AllInstruments from "../../../../../../store/all-instruments";

import Input from "../../../../../input/plainInput/Input";

import styles from "./SinglePartAdjuster.module.css";

const SinglePartAdjuster = ({ part, index, partDeleter, parts, setParts }) => {
  const [isFocused, setIsFocused] = useState(false);

  const [instName, setInstName] = useState("");
  // const [hints, setHints] = useState([]);

  const { instrument, rank, specialDesignate } = part;
  const { allInstruments } = useContext(AllInstruments);

  let rankOrDesignate;

  specialDesignate === "a"
    ? (rankOrDesignate = "Assist")
    : (rankOrDesignate = rank);

  useEffect(() => {
    if (instrument.name) {
      setInstName(instrument.name.toLowerCase());
    }
  }, []);

  const deleteClicker = () => {
    partDeleter(index);
  };

  const togglePlaceHolder = () => {
    setIsFocused((previous) => !previous);
  };

  const changeRank =(event) => {
    let tempList = [...parts];
    tempList[index].rank = event.target.value;
    setParts([...tempList]);
  }



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
            placeholder={'enter instrument'}
            onChange={(e) => setInstName(e.target.value)}
          />
        </Hint>
      </div>
      <div className={styles.innerDiv}>
        <input className={styles.input} placeholder={rankOrDesignate} onChange={changeRank}></input>
      </div>
      <div className={styles.innerDiv}>
        <TiDelete className={styles.icon} onClick={deleteClicker} />
      </div>
    </div>
  );
};

export default SinglePartAdjuster;
