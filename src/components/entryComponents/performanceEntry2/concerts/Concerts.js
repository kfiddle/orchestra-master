import { useState } from "react";

import Horloge from "../horlage/Horloge";

import styles from "./Concerts.module.css";

const initialConcert = (
  <Horloge key={0} label={"Primary Date"} event={"PRIMARYDATE"} />
);

const Concerts = () => {
  const [displayableConcerts, setDisplayableConcerts] = useState([
    initialConcert,
  ]);

  const addConcertClicked = () => {
    let tempList = [...displayableConcerts];
    tempList.push(
      <Horloge
        key={displayableConcerts.length}
        label={"additional"}
        event={"CONCERT"}
      />
    );
    setDisplayableConcerts(tempList);
  };

  return (
    <div>
      <div className={styles.additionalPerfButtonDiv}>
        {displayableConcerts}

        <button
          onClick={addConcertClicked}
          className={styles.button}
          type={"button"}
        >
          Additional Performance Date(s) ?
        </button>
      </div>
    </div>
  );
};

export default Concerts;
