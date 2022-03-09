import { Fragment } from "react/cjs/react.production.min";

import classes from "./DisplayedSimplePiece.module.css";

const DisplayedSimplePiece = (props) => {
  const { id, composerName, title, duration } = props.piece;

  console.log(props.piece)
  console.log(composerName);
  console.log(title);

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
