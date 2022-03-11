import { useContext } from "react";
import PiecesList from "../../../../store/pieces-list";

import DisplayedSimplePiece from "./displayedSimplePiece/DisplayedSimplePiece";
import classes from "./DisplayedPiecesSimple.module.css";

const DisplayedPiecesSimple = (props) => {
  const { clickedPiecesList } = useContext(PiecesList);

  const displayedChosenPieces = clickedPiecesList.map((showTune) => (
    <DisplayedSimplePiece
      key={clickedPiecesList.indexOf(showTune)}
      showTune={showTune}
    />
  ));

  return <div className={classes.outerContainer}>{displayedChosenPieces}</div>;
};

export default DisplayedPiecesSimple;
