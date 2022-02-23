import DisplayedPiece from "./displayedPiece/DisplayedPiece";
import classes from "./DisplayedPieces.module.css";

const DisplayedPieces = (props) => {
  const pieces = props.piecesList;
  const stringSetters = props.stringSetters;

  const displayedChosenPieces = pieces.map((piece) => (
    <DisplayedPiece key={pieces.indexOf(piece)} piece={piece} stringSetters={stringSetters} />
  ));

  return <div className={classes.outerContainer}>{displayedChosenPieces}</div>;
};

export default DisplayedPieces;
