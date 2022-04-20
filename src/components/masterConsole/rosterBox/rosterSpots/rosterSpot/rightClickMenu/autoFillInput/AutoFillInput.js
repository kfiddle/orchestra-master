import { useState } from "react";
import useAutoFill from "../../../../../../../hooks/useAutoFill";

import styles from "./AutoFillInput.module.css";



const AutoFillInput = (props) => {
  const [hintArray, setHintArray] = useState([]);
  const [currentNameFragment, setCurrentNameFragment] = useState("");
  const [setNameFragment, hintName] = useAutoFill();

  console.log(hintName)

  const nameFinder = (event) => {
    setNameFragment(event.target.value.toUpperCase());
  };

  return <input className={styles.testInput} onChange={nameFinder}></input>;
};

export default AutoFillInput;
