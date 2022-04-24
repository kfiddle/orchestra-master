import { useState, useContext } from "react";

import Show from "./show/Show";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Shows.module.css";

//MasterConsole4 has this

const Shows = (props) => {
  const [clickedPerformance, setClickedPerformance] = useState({});
  const { shows } = useContext(ConsoleHolder);

  const clicked = props.clicked;

  const clickedPerformanceHandler = (performance) => {
    setClickedPerformance(performance);
    clicked(performance);
  };

  const displayablePerformances = shows.map((performance) => (
    <Show
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={clickedPerformance === performance ? true : false}
    />
  ));

  return <div className={styles.outerContainer}>{displayablePerformances}</div>;
};

export default Shows;
