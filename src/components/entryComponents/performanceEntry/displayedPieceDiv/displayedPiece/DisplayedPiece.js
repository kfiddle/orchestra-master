
import { useSelector } from "react-redux";

import WhichServer from "../../../../helperFunctions/WhichServer";
import classes from "./DisplayedPiece.module.css";
import { Fragment } from "react";


const DisplayedPiece = ({ piece: { id, composerName, title, duration } }) => {
  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

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

export default DisplayedPiece;
