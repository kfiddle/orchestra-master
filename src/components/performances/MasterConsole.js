import { useState } from "react";

import Performance from "./Performance";
import Piece from "../piece/Piece";
import Roster from "../piece/Roster";

import styles from "./MasterConsole.module.css";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const AllPerformances = (props) => {
  const [performanceWasClicked, setPerformanceWasClicked] = useState(false);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );
  const [rosterObject, setRosterObject] = useState({});

  const clickedPerformanceHandler = async (performance) => {
    setPerformanceWasClicked(true);
    const performancePiecesResponse = await PushBasic(performance, "get-performance-pieces")
    const ppsJsonified = await performancePiecesResponse.json();
    setPiecesOfClickedPerformance(ppsJsonified);
  };

  const clickedPiece = async (piece) => {
    const rosterResponse = await PushBasic(piece, "get-roster-from-piece");
    const jsonified = await rosterResponse.json(); 
    setRosterObject(jsonified);
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
    />
  ));

  const displayablePieces = piecesOfClickedPerformance.map((pp) => (
    <Piece key={pp.id} pp={pp} clicked={clickedPiece} />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>{displayablePieces}</div>
      <div className={styles.rosterDiv}>
        <Roster roster={rosterObject} />
      </div>
    </div>
  );
};

export default AllPerformances;
