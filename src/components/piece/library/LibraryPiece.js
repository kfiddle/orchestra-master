import { FiEdit } from "react-icons/fi";
import { GiMusicalScore } from "react-icons/gi";
import { useState } from "react";

import OrchestrationEntry from "../../entryComponents/orchestrationEntry/OrchestrationEntry";

import classes from "./LibraryPiece.module.css";

const LibraryPiece = (props) => {
  const [orchestrationClicked, setOrchestrationClicked] = useState(false);

  const {
    id,
    prefix,
    libNumber,
    suffix,
    composerName,
    arranger,
    title,
    otherName,
    publisher,
    duration,
    instrumentation,
    vocalistSoloist,
    percBreakdown,
    notes,
    status,
    sign,
    updated,
  } = props.piece;

  const openOrchestration = () => {
    setOrchestrationClicked(true);
  };

  const closeModal = () => {
    setOrchestrationClicked(false);
  };

  return (
    <div className={`${classes.outerContainer} ${classes.unclicked}`}>
      <div className={classes.libNumberDiv}>{libNumber}</div>
      <div className={classes.lastNameDiv}>{composerName}</div>
      <div className={classes.arrangerDiv}>{arranger}</div>
      <div className={classes.titleDiv}>{title}</div>
      <div className={classes.otherNameDiv}>{otherName}</div>
      <div className={classes.publisherDiv}>{publisher}</div>
      <div className={classes.durationDiv}>{duration > 0 && duration}</div>

      <div className={classes.editIconDiv}>
        <GiMusicalScore />
      </div>
      <div className={classes.orchestrationIconDiv}>
        <FiEdit onClick={openOrchestration} />
      </div>

      {orchestrationClicked && (
        <OrchestrationEntry closeModal={closeModal} piece={props.piece} />
      )}
    </div>
  );
};

export default LibraryPiece;
