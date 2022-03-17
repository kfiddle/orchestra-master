import { useState } from "react";

import Performances from "./performances/Performances";
import Pieces from "./pieces/Pieces";

import RosterBox from "./rosterBox/RosterBox";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import styles from "./MasterConsole3.module.css";

//season2 has this

const MasterConsole3 = (props) => {
  const allPerformances = props.allPerformances;
  const [pieces, setPieces] = useState([]);
  const [clickedPiece, setClickedPiece] = useState(null);

  const clickedPerformanceHandler = async (performance) => {
    const performancePiecesResponse = await PushBasic(
      performance,
      "get-showtunes-on-program"
    );
    const ppsJsonified = await performancePiecesResponse.json();
    setPieces(ppsJsonified);
    setClickedPiece(null);
  };

  const clickedPieceHandler = async (piece) => {
    setClickedPiece(piece);
  };

  return (
    <div className={styles.outerContainer}>
      <div>
        <Performances
          allPerformances={allPerformances}
          clicked={clickedPerformanceHandler}
        />
      </div>
      <div className={styles.piecesDiv}>
        {pieces.length > 0 && (
          <Pieces pieces={pieces} clicked={clickedPieceHandler} />
        )}
      </div>
      <div className={styles.RosterBoxDiv}>
        {clickedPiece && <RosterBox piece={clickedPiece} />}
      </div>
    </div>
  );
};

export default MasterConsole3;
