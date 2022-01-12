import { useState } from "react";

import Performance from "./Performance";
import ConsolePiece from "../piece/ConsolePiece";
import Roster from "../piece/Roster";

import styles from "./MasterConsole.module.css";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const AllPerformances = (props) => {
  const [clickedPerformancePiece, setClickedPerformancePiece] = useState(null);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );

  

  const clickedPerformanceHandler = async (performance) => {
    props.clicked(performance);
    const performancePiecesResponse = await PushBasic(
      performance,
      "get-pieces-on-program"
    );
    const ppsJsonified = await performancePiecesResponse.json();
    setPiecesOfClickedPerformance(ppsJsonified);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={props.activePerformance === performance ? true : false}
    />
  ));

  const displayablePieces = piecesOfClickedPerformance.map((pp) => (
    <ConsolePiece
      key={pp.id}
      pp={pp}
      clicked={() => {
        setClickedPerformancePiece(pp);
      }}
      activePiece={clickedPerformancePiece === pp ? true : false}
    />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>{displayablePieces}</div>
      <div className={styles.rosterDiv}>
        {clickedPerformancePiece && (
          <Roster pp={clickedPerformancePiece} />
        )}
      </div>
    </div>
  );
};

export default AllPerformances;
