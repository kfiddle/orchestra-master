import { useContext } from "react";
import PiecesList from "../../../../store/pieces-list";

import DisplayedPiece from "./displayedPiece/DisplayedPiece";
import classes from "./DisplayedPieces.module.css";

const DisplayedPieces = (props) => {
  const { clickedPiecesList } = useContext(PiecesList);

  const stringSetters = props.stringSetters;

  const displayedChosenPieces = clickedPiecesList.map((piece) => (
    <DisplayedPiece
      key={clickedPiecesList.indexOf(piece)}
      piece={piece}
      stringSetters={stringSetters}
    />
  ));

  return <div className={classes.outerContainer}>{displayedChosenPieces}</div>;
};

export default DisplayedPieces;
