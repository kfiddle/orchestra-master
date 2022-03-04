import { useState } from "react";

import Horloge from "../horlage/Horloge";

import styles from "./Rehearsals.module.css";

const Rehearsals = (props) => {
  const [displayableRehearsals, setDisplayableRehearsals] = useState([]);

  const addRehearsalClicked = () => {
    let tempList = [...displayableRehearsals];
    tempList.push(
      <Horloge
        key={displayableRehearsals.length}
        label={"Rehearsal"}
        event={"REHEARSAL"}
      />
    );
    setDisplayableRehearsals(tempList);
  };

  return (
    <div>
      <div className={styles.rehearsalButtonDiv}>
        <button
          onClick={addRehearsalClicked}
          className={styles.button}
          type={"button"}
        >
          Rehearsal Date
        </button>
      </div>
      <div className={styles.rehearsalsDiv}>{displayableRehearsals}</div>
    </div>
  );
};

export default Rehearsals;
