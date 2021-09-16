import { useState } from "react";

import Performance from "./Performance";

import styles from "./AllPerformances.module.css";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const AllPerformances = (props) => {
  const [clickedPerformance, setClickedPerformance] = useState(null);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );

  const clickedPerformanceHandler = (performance) => {
    setClickedPerformance(performance);
    setPiecesOfClickedPerformance(performance.pieces);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
    />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>
        {piecesOfClickedPerformance.length} length
      </div>
      <div className={styles.rosterDiv}></div>
    </div>
  );
};

export default AllPerformances;
