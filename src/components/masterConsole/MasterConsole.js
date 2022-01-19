import { useState, useContext } from "react";

import Performance from "./performances/Performance";
import ConsolePieceList from "./performances/consolePiece/ConsolePieceList";

import ConsolePiece from "./performances/consolePiece/ConsolePiece";

import PerformancePieceList from "../../store/performance-piece-list";
import ClickedPerformance from "../../store/clicked-performance";

import styles from "./MasterConsole.module.css";

const AllPerformances = (props) => {
  const { clickedPerformance } = useContext(ClickedPerformance);

  const clickedPerformanceHandler = async (performance) => {
    props.clicked(performance);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={props.activePerformance === performance ? true : false}
    />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      {/* <div className={styles.piecesRostersDiv}> */}
      {clickedPerformance && <ConsolePieceList />}
      {/* </div> */}
      
    </div>
  );
};

export default AllPerformances;
