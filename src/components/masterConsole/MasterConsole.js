import { useState, useContext } from "react";

import Performance from "./performances/Performance";
import ConsolePieceList from "./performances/consolePiece/ConsolePieceList";

import ConsolePiece from "./performances/consolePiece/ConsolePiece";

import PerformancePieceList from "../../store/performance-piece-list";
import ClickedPerformance from "../../store/clicked-performance";



import styles from "./MasterConsole.module.css";

const AllPerformances = (props) => {

  const { clickedPerformance } = useContext(ClickedPerformance);
  // const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
  //   []
  // );

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
    // <PerformancePieceList.Provider value={{ piecesOfClickedPerformance }}>
      <div className={styles.outerContainer}>
        <div className={styles.concertsDiv}>{displayablePerformances}</div>
        {clickedPerformance && <ConsolePieceList />}
      </div>
    // </PerformancePieceList.Provider>
  );
};

export default AllPerformances;
