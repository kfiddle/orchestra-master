import { useState } from "react";

import OrchInput from "./orchInput/OrchInput";
import styles from "./Family.module.css";

const Family = (props) => {
  const [number, setNumber] = useState("");
  const familyName = props.family;

  return (
    <div className={styles.familyDiv}>
      <label className={styles.label}>{familyName}</label>
      <OrchInput number={number} numberSetter={setNumber} />
    </div>
  );
};

export default Family;
