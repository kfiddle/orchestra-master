import { useState } from "react";

import NewHorloge from "../horlage/NewHorloge";

import styles from "./Concerts.module.css";

const initialConcert = (
  <NewHorloge key={0} label={"Primary Date"} event={"PRIMARYDATE"} />
);

const Concerts = () => {
  const [displayableConcerts, setDisplayableConcerts] = useState([
    initialConcert,
  ]);

  const addConcertClicked = () => {
    let tempList = [...displayableConcerts];
    tempList.push(
      <NewHorloge
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
        <button
          onClick={addConcertClicked}
          className={styles.button}
          type={"button"}
        >
          Add Performance
        </button>
        {displayableConcerts}
      </div>
    </div>
  );
};

export default Concerts;
