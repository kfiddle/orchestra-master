import { useState, useContext } from "react";
import { FiEdit } from "react-icons/fi";

import OrchestrationEntry from "../../../entryComponents/orchestrationEntry/OrchestrationEntry";

import { ConsoleHolder } from "../../../../store/object-holder";

import styles from "./ConsolePiece.module.css";

const ConsolePiece = (props) => {
  const pp = props.pp;
  const piece = pp.piece;
  const { title, composer } = piece;

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const isPieceClicked = dashboard.clickedPiece === pp; 

  const clickedOrNot = isPieceClicked ? styles.clicked : styles.unclicked;

  const clickedPieceHandler = () => {
    dispatch({ type: "clickedPiece", clickedPiece: pp });
  };

  return (
    <div
      className={`${styles.pieceContainer} ${clickedOrNot}`}
      onClick={clickedPieceHandler}
    >
      <div className={styles.titleDiv}>{title}</div>
      <div className={styles.composerDiv}>{composer}</div>
    </div>
  );
};

export default ConsolePiece;
