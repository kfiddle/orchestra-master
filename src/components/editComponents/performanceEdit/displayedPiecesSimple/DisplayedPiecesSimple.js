import { useContext } from "react";
import ShowTunesList from "../../../../store/showtunes-list";

import DisplayedSimplePiece from "./displayedSimplePiece/DisplayedSimplePiece";
import classes from "./DisplayedPiecesSimple.module.css";

const DisplayedPiecesSimple = (props) => {
  const { clickedPiecesList } = useContext(ShowTunesList);

  const displayedChosenPieces = clickedPiecesList.map((piece) => (
    <DisplayedSimplePiece
      key={clickedPiecesList.indexOf(piece)}
      piece={piece}
    />
  ));

  return <div className={classes.outerContainer}>{displayedChosenPieces}</div>;
};

export default DisplayedPiecesSimple;
