import { useContext, useEffect } from "react";

import ShowTunesList from "../../../../../../store/showtunes-list";

import classes from "./PieceItemEdit.module.css";

const PieceItemEdit = (props) => {
  const { pieceToList, clickedPiecesList } = useContext(ShowTunesList);
  const { title, composerName } = props.piece;

  let outerContainerClass = classes.unclickedItem;

  for (let piece of clickedPiecesList) {
    if (piece === props.piece) {

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
