import { useState } from "react";

import Performance from "./performances/Performance";

import styles from "./MasterConsole2.module.css";

const MasterConsole2 = (props) => {
  const [clickedPerformance, setClickedPerformance] = useState({});

  const clickedPerformanceHandler = (performance) => {
    setClickedPerformance(performance);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={clickedPerformance === performance ? true : false}
    />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>{}</div>
      <div>{}</div>
      <div>{}</div>
    </div>
  );
};

export default MasterConsole2;
