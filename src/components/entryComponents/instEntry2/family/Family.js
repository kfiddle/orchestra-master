import { useState, useEffect, useContext } from "react";
import Chairs from "../../instEntry/family/chairs/Chairs";

import FamilyChairsSend from "./FamilyChairsSend";

import { InstEntryStore } from "../../../../store/form-holders";

import { Chair, Part } from "../Chair";

import useSetPrimary from "../../../../hooks/useSetPrimary";

import styles from "./Family.module.css";

const Family = ({ label, chairs, setChairs, insts }) => {
  const [invalidEntry, setInvalidEntry] = useState(false);
  const [localText, setLocalText] = useState([]);
  const { submitClicked } = useContext(InstEntryStore);

  const flutes = useSetPrimary(localText[0], "FLUTE", chairs, setChairs);

  useEffect(() => {
    if (submitClicked) {
      FamilyChairsSend(localText);
    }
  }, [submitClicked]);

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

  const handleInput = (event) => {
    const initialText = event.target.value;
    const textNoDashes = initialText.replace(/-/g, "");
    setLocalText(textNoDashes.replace(/\s+/g, ""));
  };

  return (
    <div className={styles.outerContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} onChange={handleInput}></input>
    </div>
  );
};

export default Family;
