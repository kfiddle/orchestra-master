import classes from "./LibraryPiece.module.css";

const LibraryPiece = (props) => {
  const {
    id,
    title,
    composerFirstName,
    composerLastName,
    arranger,
    otherName,
    publisher,
    libNumber,
    duration,
    notes,
  } = props.piece;

  return (
    <div className={`${classes.outerContainer} ${classes.unclicked}`}>
      <div className={classes.libNumberDiv}>{libNumber}</div>
      <div className={classes.lastNameDiv}>{composerLastName}</div>
      <div className={classes.arrangerDiv}>{arranger}</div>
      <div className={classes.titleDiv}>{title}</div>
      <div className={classes.otherNameDiv}>{otherName}</div>
      <div className={classes.publisherDiv}>{publisher}</div>
      <div className={classes.durationDiv}>{duration>0 && duration}</div>
    </div>
  );
};

export default LibraryPiece;
