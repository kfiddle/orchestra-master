import { useState, useEffect } from "react";
import Chairs from "../../instEntry/family/chairs/Chairs";

import { Chair, Part } from "../Chair";
import useSetPrimary from "../../../../hooks/useSetPrimary";

import styles from "./Family.module.css";

const Family = ({ label, chairs, setChairs, insts }) => {
  const [invalidEntry, setInvalidEntry] = useState(false);
  const [localText, setLocalText] = useState([]);

  const flutes = useSetPrimary(localText[0], "FLUTE", chairs, setChairs);

  const setBigNums = (index, instName) => {
    let list = [];
    for (let num = 1; num <= localText[index]; num++) {
      let parts = [];
      let part = Part(instName, num);
      parts.push(part);
      let chair = Chair(parts);
      console.log(chair);
      list.push(chair);
    }
    setChairs([...chairs, ...list]);
  };

  useEffect(() => {
    // const setFlutes = () => {
    //   setBigNums(0, "FLUTE");
    //   setBigNums(1, "Clarinet");
    // };
    // const setClarinets = () => {
    //   setBigNums(1, "Clarinet");
    // };
    // setFlutes();
    // setClarinets();
  }, [localText]);

  const handleInput = (event) => {
    if (event.target.value.length === 0) {
      setInvalidEntry(false);
    } else {
      for (let char of event.target.value) {
        if ((isNaN(char) && char !== "a") || event.target.value.length > 5) {
          setInvalidEntry(true);
        } else {
          setInvalidEntry(false);
        }
      }
    }

    setLocalText(event.target.value);
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} onChange={handleInput}></input>
    </div>
  );
};

export default Family;
