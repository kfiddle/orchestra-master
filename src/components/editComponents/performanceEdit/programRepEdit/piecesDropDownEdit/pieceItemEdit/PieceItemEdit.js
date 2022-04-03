import { useContext, useState, useEffect } from "react";

import ShowTunesList from "../../../../../../store/showtunes-list";
import { ShowEditsSubmitted } from "../../../../../../store/submit-clicked";

import classes from "./PieceItemEdit.module.css";

const PieceItemEdit = (props) => {
  const { pieceToList, clickedPiecesList, showPiecesList } =
    useContext(ShowTunesList);
  const { showEditsSubmitted } = useContext(ShowEditsSubmitted);
  const { title, composerName } = props.piece;

  let outerContainerClass = classes.unclickedItem;

  useEffect(() => {
    if (showEditsSubmitted) {
      console.log(clickedPiecesList);
      console.log("and now...");
      console.log(showPiecesList);
    }

  }, [showEditsSubmitted]);

  for (let piece of clickedPiecesList) {
    if (piece.title === title && piece.composerName === composerName) {
      outerContainerClass = classes.clickedItem;
    }
  }

  const clickHandler = () => {
    pieceToList(props.piece);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${classes.outerContainer} ${outerContainerClass}`}
    >
      <div className={classes.titleDiv}>{title}</div>
      <div className={classes.composerLastNameDiv}>{composerName}</div>
    </div>
  );
};

export default PieceItemEdit;
