import { useContext } from "react";

import PiecesList from "../../store/pieces-list";

import classes from "./PieceListItem.module.css";

const PieceListItem = (props) => {
  const { pieceToList, clickedPiecesList } = useContext(PiecesList);
  const title = props.piece.title;

  let outerContainerClass = classes.pieceItemDiv;

  for (let piece of clickedPiecesList) {
    if (piece === props.piece) {
      outerContainerClass = classes.clickedItem;
    }
  }

  const clickHandler = () => {
    pieceToList(props.piece);
  };

  return (
    <div onClick={clickHandler} className={outerContainerClass}>
      <div className={classes.titleDiv}>{title}</div>
    </div>
  );
};

export default PieceListItem;
