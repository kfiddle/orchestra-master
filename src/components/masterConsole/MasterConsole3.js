import { useState } from "react";

import Performances from "./performances/Performances";
import Pieces from "../pieces/Pieces";
import RosterSpots from "../rosterSpots/RosterSpots";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import styles from "./MasterConsole3.module.css";

//season2 has this

const MasterConsole3 = (props) => {
  const performances = props.allPerformances;

  const [pieces, setPieces] = useState([]);
  const [chairsToFill, setChairsToFill] = useState([]);

  const clickedPerformanceHandler = async (performance) => {
    const performancePiecesResponse = await PushBasic(
      performance,
      "get-pieces-on-program"
    );
    const ppsJsonified = await performancePiecesResponse.json();
    setPieces(ppsJsonified);
  };

  const clickedPieceHandler = async (piece) => {
    setChairsToFill(piece.chairsToFill);
  };

  return (
    <div className={styles.outerContainer}>
      <Performances
        performances={performances}
        clicked={clickedPerformanceHandler}
      />
      <Pieces pieces={pieces} clicked={clickedPieceHandler} />
      <RosterSpots chairsToFill={chairsToFill}/>
      {/* <Possibles /> */}
    </div>
  );
};

export default MasterConsole3;
