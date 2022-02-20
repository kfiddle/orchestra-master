import DisplayedPiece from "./displayedPiece/DisplayedPiece";
import classes from "./DisplayedPieces.module.css";

const DisplayedPieces = (props) => {
  const pieces = props.piecesList;

  const displayedChosenPieces = pieces.map((piece) => (
    <DisplayedPiece key={pieces.indexOf(piece)} piece={piece} />
  ));

  return <div className={classes.outerContainer}>{displayedChosenPieces}</div>;
};

export default DisplayedPieces;
