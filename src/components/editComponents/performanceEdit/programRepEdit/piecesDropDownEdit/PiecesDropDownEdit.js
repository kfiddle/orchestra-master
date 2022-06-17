import { useState, useEffect } from "react";

import PieceItemEdit from "./pieceItemEdit/PieceItemEdit";

import useGetAList3 from "../../../../../hooks/useGetAList3";

import styles from "./PiecesDropDownEdit.module.css";

const PiecesDropDownEdit = (props) => {
  const showOrHide = props.showOrHide;

  const [piecesList, refreshPieces] = useGetAList3("get-all-pieces");

  useEffect(() => {
    refreshPieces(true);
  }, []);

  const listToDisplay = piecesList.map((piece) => (
    <PieceItemEdit key={piece.id} piece={piece} />
  ));

  const displayStyleObject = !showOrHide ? { display: "none" } : {};

  return (
    <div className={styles.outerContainer} style={displayStyleObject}>
      <ul>{listToDisplay}</ul>
    </div>
  );
};

export default PiecesDropDownEdit;
