import { useContext, useEffect } from "react";

import PiecesList from "../../../store/pieces-list";

import classes from "./PieceListItem.module.css";

const PieceListItem = (props) => {
  const { pieceToList, clickedPiecesList } = useContext(PiecesList);
  const { title, composerLastName } = props.piece;

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
      <div className={classes.composerLastNameDiv}>{composerLastName}</div>
    </div>
  );
};

export default PieceListItem;
