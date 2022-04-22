import { useState, useContext } from "react";

import Performance from "./Performance";

import { MasterConsole3Holder } from "../../../store/object-holder";

import styles from "./Performances.module.css";

//MasterConsole3 has this

const Performances = (props) => {
  const [clickedPerformance, setClickedPerformance] = useState({});

  const performances = props.allPerformances;
  const clicked = props.clicked;

  const clickedPerformanceHandler = (performance) => {
    setClickedPerformance(performance);
    clicked(performance);
  };

  const displayablePerformances = performances.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={clickedPerformance === performance ? true : false}
    />
  ));

  return <div className={styles.outerContainer}>{displayablePerformances}</div>;
};

export default Performances;
