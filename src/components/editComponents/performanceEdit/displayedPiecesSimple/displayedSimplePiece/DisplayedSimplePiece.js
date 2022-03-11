import { Fragment } from "react/cjs/react.production.min";

import classes from "./DisplayedSimplePiece.module.css";

const DisplayedSimplePiece = (props) => {
  const { piece } = props.showTune;
  const { composerName, title, duration } = piece;

  return (
    <Fragment>
      <div className={classes.pieceContainer}>
        <div className={classes.lastNameDiv}>{composerName}</div>
        <div className={classes.titleDiv}>{title}</div>
        <div className={classes.durationDiv}>{duration}'</div>
      </div>
    </Fragment>
  );
};

export default DisplayedSimplePiece;
