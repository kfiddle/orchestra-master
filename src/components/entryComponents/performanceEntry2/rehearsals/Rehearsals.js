import { Fragment } from "react";
import { useState } from "react";

import NewHorloge from "../horlage/NewHorloge";

import styles from "./Rehearsals.module.css";

const Rehearsals = (props) => {
  const [displayableRehearsals, setDisplayableRehearsals] = useState([]);

  const addRehearsalClicked = () => {
    let tempList = [...displayableRehearsals];
    tempList.push(
      <NewHorloge
        key={displayableRehearsals.length}
        label={"Rehearsal"}
        event={"REHEARSAL"}
      />
    );
    setDisplayableRehearsals(tempList);
  };

  return (
    <Fragment>
      <div className={styles.rehearsalButtonDiv}>
        <button
          onClick={addRehearsalClicked}
          className={styles.button}
          type={"button"}
        >
          Rehearsals
        </button>
      </div>
      <div className={styles.rehearsalsDiv}>{displayableRehearsals}</div>
    </Fragment>
  );
};

export default Rehearsals;
