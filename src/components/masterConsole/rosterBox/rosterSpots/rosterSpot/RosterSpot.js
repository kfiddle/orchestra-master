import { useState } from "react";

import EmailPlayer from "./emailPlayer/EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import classes from "./RosterSpot.module.css";

// Roster has this

const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);

  let { parts, rank } = props.playerInChair.chair;
  let player = props.playerInChair.player;
  let sectionSeat = props.playerInChair.sectionSeat;
  let primaryPart = parts[0];
  let doublingPart = parts.length > 1 ? `+${parts[1]}` : "";

  let lastName = "";

  if (player) {
    lastName = player.lastName;
  }

  let playerOpacity = player ? "0.6" : "1.0";

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
    setMailClicked(false);
  };

  const spotClickedHandler = () => {
    props.spotClicked(props.playerInChair);
  };

  let printSectionLabel = sectionSeat > 0 || rank != 1 ? false : true;
  let printRankOrSeat = sectionSeat > 0 ? sectionSeat : rank;

  let marginClass = !printSectionLabel
    ? classes.sectionMargin
    : classes.sectionHeadMargin;

  let backgroundClass = player? classes.hired: classes.unHired;

  return (
    <div
      className={`${classes.outerContainer} ${marginClass} ${backgroundClass}`}
      onClick={spotClickedHandler}
    >
      <div className={classes.partDiv}>{printSectionLabel && primaryPart}</div>
      <div className={classes.rankDiv}>{printRankOrSeat}</div>
      <div className={classes.playerDiv}>{lastName}</div>
      <div className={classes.doublingDiv}>{doublingPart}</div>

      <div className={classes.mailButtonDiv}>
        <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
      </div>
      {mailClicked && <EmailPlayer closeModal={closeModal} />}
    </div>
  );
};

export default RosterSpot;
