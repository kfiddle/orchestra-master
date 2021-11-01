import classes from "./DisplayedPieceDiv.module.css";

const DisplayedPieceDiv = (props) => {
  const displayedChosenPieces = props.piecesList.map((piece) => (
    <div className={classes.pieceContainer} key={Math.random()}>
      <div className={classes.lastNameDiv}>{piece.composerLastName}</div>
      <div className={classes.titleDiv}>{piece.title}</div>
      <div className={classes.durationDiv}>{piece.duration}'</div>
    </div>
  ));

  return <div className={classes.outerContainer}>{displayedChosenPieces}</div>;
};

export default DisplayedPieceDiv;
