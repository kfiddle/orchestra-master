import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import Roster from "../../../piece/roster/Roster";

import OrchestrationEntry from "../../../entryComponents/orchestrationEntry/OrchestrationEntry";

import styles from "./ConsolePiece.module.css";

const ConsolePiece = (props) => {
  const pp = props.pp;
  const { title, composer } = pp.piece;
  const [orchestrationClicked, setOrchestrationClicked] = useState(false);
  const [clickedPiece, setClickedPiece] = useState(false);

  const clickedOrNot = props.activePiece ? styles.clicked : styles.unclicked;

  const clickedPieceHandler = () => {
    props.clicked(props.pp);
    setClickedPiece(true);
  };

  const closeModal = () => {
    setOrchestrationClicked(false);
  };

  const openOrchestration = () => {
    setOrchestrationClicked(true);
  };

  const playerPlaced = () => {
    props.playerPlaced(true);
  };

  return (
    <div className={styles.consoleChildrenDiv}>
      <div
        className={`${styles.pieceContainer} ${clickedOrNot}`}
        onClick={clickedPieceHandler}
      >
        <div className={styles.titleDiv}>{title}</div>
        <div className={styles.composerDiv}>{composer}</div>
      </div>
      <div className={styles.rosterDiv}>
        {clickedPiece && <Roster pp={pp} playerPlaced={playerPlaced} />}
      </div>
    </div>
  );
};

export default ConsolePiece;
