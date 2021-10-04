import { useState } from "react";

import Performance from "./Performance";
import Piece from "../piece/Piece";
import Roster from "../piece/Roster";

import styles from "./MasterConsole.module.css";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const AllPerformances = (props) => {
  const [performanceWasClicked, setPerformanceWasClicked] = useState(false);
  const [clickedPerformancePiece, setClickedPerformancePiece] = useState(null);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );
  const [pppList, setPPPList] = useState([]);

  const clickedPerformanceHandler = async (performance) => {
    setPerformanceWasClicked(true);
    props.clicked(performance);
    const performancePiecesResponse = await PushBasic(performance, "get-performance-pieces")
    const ppsJsonified = await performancePiecesResponse.json();
    setPiecesOfClickedPerformance(ppsJsonified);
  };

  const clickedPiece = async (performancePiece) => {
    setClickedPerformancePiece(performancePiece)
    const rosterResponse = await PushBasic(performancePiece, "get-ppps-from-pp");
    const jsonified = await rosterResponse.json(); 
    setPPPList(jsonified);
  };


  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
      active={props.activePerformance === performance? true: false}
    />
  ));

  const displayablePieces = piecesOfClickedPerformance.map((pp) => (
    <Piece key={pp.id} pp={pp} clicked={clickedPiece} activePiece={clickedPerformancePiece === pp? true : false} />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>{displayablePieces}</div>
      <div className={styles.rosterDiv}>
        <Roster roster={pppList} />
      </div>
    </div>
  );
};

export default AllPerformances;
