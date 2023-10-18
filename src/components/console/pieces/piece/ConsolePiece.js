import { useState, useContext, useEffect } from "react";
import { FiEdit } from "react-icons/fi";

import OrchestrationEntry from "../../../entryComponents/orchestrationEntry/OrchestrationEntry";

import { ConsoleHolder } from "../../../../store/object-holder";

import pieces from '../../../../dummyData/pieces';

import styles from "./ConsolePiece.module.css";

const ConsolePiece = ({ showPiece }) => {

  const piece = pieces.find(piece => showPiece.pieceId === piece.id)
  const { title, composerLast } = piece;

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const isPieceClicked = dashboard.clickedPiece === showPiece;

  const clickedOrNot = isPieceClicked ? styles.clicked : styles.unclicked;

  const clickedPieceHandler = () => {
    dispatch({ type: "clickedPiece", clickedPiece: showPiece });
  };

  return (
    <div
      className={`${styles.pieceContainer} ${clickedOrNot}`}
      onClick={clickedPieceHandler}
    >
      <div className={styles.composerDiv}>{composerLast}:</div>
      <div className={styles.titleDiv}>{title}</div>
    </div>
  );
};

export default ConsolePiece;
