import { useState } from "react";

import Performances from "./performances/Performances";
import Pieces from "../pieces/Pieces";
import RosterSpots from "../rosterSpots/RosterSpots";
import Possibles from "../possibles/Possibles";

import RosterBox from "../rosterBox/RosterBox";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import styles from "./MasterConsole3.module.css";

//season2 has this

const MasterConsole3 = (props) => {
  const performances = props.allPerformances;

  const [clickedPerformance, setClickedPerformance] = useState(null);
  const [pieces, setPieces] = useState([]);
  const [clickedPiece, setClickedPiece] = useState(null);
  const [chairsToFill, setChairsToFill] = useState([]);
  const [clickedChairIndex, setClickedChairIndex] = useState(0);
  const [possiblePlayers, setPossiblePlayers] = useState([]);

  const clickedPerformanceHandler = async (performance) => {
    const performancePiecesResponse = await PushBasic(
      performance,
      "get-pieces-on-program"
    );
    const ppsJsonified = await performancePiecesResponse.json();
    setClickedPerformance(performance);
    setPieces(ppsJsonified);
    setClickedPiece(null);
    setChairsToFill([]);
    setClickedChairIndex(0);
    setPossiblePlayers([]);
  };

  const clickedPieceHandler = async (piece) => {
    setChairsToFill(piece.chairsToFill);
    setClickedPiece(piece);
    setClickedChairIndex(0);
    setPossiblePlayers([]);
  };

  const clickedChairHandler = async (rosterSpot) => {
    let spotToSend = { pp: clickedPiece, indexOfChair: rosterSpot.index };
    setClickedChairIndex(rosterSpot.index);
    const response = await PushBasic(spotToSend, "get-possible-players");
    if (response.ok) {
      let listToSet = await response.json();
      setPossiblePlayers(listToSet);
    }
  };


  return (
    <div className={styles.outerContainer}>
      <Performances
        performances={performances}
        clicked={clickedPerformanceHandler}
      />
      <div>
        <Pieces pieces={pieces} clicked={clickedPieceHandler} />
      </div>
      <div>{clickedPiece && <RosterBox piece={clickedPiece} />}</div>
    </div>
  );
};

export default MasterConsole3;
