import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import Roster from "../../../piece/roster/Roster";

import OrchestrationEntry from "../../../entryComponents/orchestrationEntry/OrchestrationEntry";

import styles from "./ConsolePiece.module.css";

const ConsolePiece = (props) => {
  const { piece } = props.pp;
  const { title, composer } = piece;
  const [orchestrationClicked, setOrchestrationClicked] = useState(false);
  const [clickedOuterContainer, setClickedOuterContainer] = useState(false);

  const clickedOrNot = props.activePiece? styles.clicked: styles.unclicked;

  const clickedPieceHandler = () => {
    props.clicked(props.pp);
    setClickedOuterContainer(true);
  };

  const closeModal = () => {
    setOrchestrationClicked(false);
  };

  const openOrchestration = () => {
    setOrchestrationClicked(true);
  };

  console.log(piece.chairsToFill)

  

  return (
    <div className={`${styles.outerContainer} ${clickedOrNot}`} onClick={clickedPieceHandler}>
      <div className={styles.composerDiv}>{composer}</div>
      <div className={styles.titleDiv}>{title}</div>

      <div className={styles.rosterDiv}>
        {/* {clickedOuterContainer && (
          <Roster pp={piece} />
        )} */}
      </div>

    </div>
  );
};

export default ConsolePiece;
