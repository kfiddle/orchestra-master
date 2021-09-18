import { useState } from "react";

import Performance from "./Performance";
import Piece from "../piece/Piece";

import styles from "./MasterConsole.module.css";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const AllPerformances = (props) => {
  const [performanceWasClicked, setPerformanceWasClicked] = useState(false);
  const [piecesOfClickedPerformance, setPiecesOfClickedPerformance] = useState(
    []
  );
  const [instrumentNumbersList, setInstrumentNumbersList] = useState([]);

  const clickedPerformanceHandler = (performance) => {
    setPerformanceWasClicked(true);
    setPiecesOfClickedPerformance(performance.pieces);
  };

  const clickedPiece = async (piece) => {
    const orchListResponse = await PushBasic(piece, "get-roster-from-piece");
    
    if (orchListResponse.ok) {
      // setInstrumentNumbersList(orchListResponse.json());
      console.log(orchListResponse.json());
    }
  };

  const displayablePerformances = props.list.map((performance) => (
    <Performance
      key={performance.id}
      performance={performance}
      clicked={clickedPerformanceHandler}
    />
  ));

  const displayablePieces = piecesOfClickedPerformance.map((piece) => (
    <Piece key={piece.id} piece={piece} clicked={clickedPiece} />
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.concertsDiv}>{displayablePerformances}</div>
      <div className={styles.piecesDiv}>{displayablePieces}</div>
      <div className={styles.rosterDiv}></div>
    </div>
  );
};

export default AllPerformances;
