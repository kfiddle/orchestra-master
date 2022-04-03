import { useContext, useState, useEffect } from "react";

import ShowTunesList from "../../../../../../store/showtunes-list";
import { ShowEditsSubmitted } from "../../../../../../store/submit-clicked";
import PerformanceToEdit from "../../../../../../store/performance-to-edit";

import ObjectOnList from "../../../../../helperFunctions/ObjectOnList";
import PushBasic from "../../../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./PieceItemEdit.module.css";

const PieceItemEdit = (props) => {
  const { pieceToList, clickedPiecesList, showPiecesList } =
    useContext(ShowTunesList);
  const { showEditsSubmitted } = useContext(ShowEditsSubmitted);
  const { performance } = useContext(PerformanceToEdit);

  const piece = props.piece;
  const { title, composerName } = piece;

  let outerContainerClass = classes.unclickedItem;

  useEffect(() => {
    if (showEditsSubmitted) {
      const previousList = showPiecesList.map((showtune) => showtune.piece);

      if (ObjectOnList(clickedPiecesList, piece) >= 0) {
        console.log(title + "   " + ObjectOnList(clickedPiecesList, piece));
      }

      const checkForEdits = async () => {
        if (
          !ObjectOnList(previousList, piece) &&
          ObjectOnList(clickedPiecesList, piece)
        ) {
          let response = await PushBasic(
            {
              piece,
              show: performance,
              orderNum: clickedPiecesList.indexOf(piece),
            },
            "add-show-piece"
          );
        } else if (
          ObjectOnList(previousList, piece) &&
          !ObjectOnList(clickedPiecesList, piece)
        ) {
          let response = await PushBasic(
            showPiecesList[ObjectOnList(previousList, piece).index],
            "remove-showpiece"
          );
        } else if (
          ObjectOnList(previousList, piece).index !==
          ObjectOnList(clickedPiecesList, piece).index
        ) {
          let response = await PushBasic(
            showPiecesList[ObjectOnList(previousList, piece).index],
            "edit-showpiece-ordernum/" +
              ObjectOnList(clickedPiecesList, piece).index
          );
        }
      };

      checkForEdits();
    }

    const previousList = showPiecesList.map((showtune) => showtune.piece);
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
