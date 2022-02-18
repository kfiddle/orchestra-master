import { useState } from "react";

import EmailPlayer from "./emailPlayer/EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import classes from "./RosterSpot.module.css";

// Roster has this

const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);

  let { parts, rank } = props.playerInChair.chair;
  let player = props.playerInChair.player;
  let primaryPart = parts[0];
  let doublingPart = parts.length > 1 ? `+${parts[1]}` : "";
  // let index = props.index;

  let lastName = "";

  if (player) {
    lastName = player.lastName;
  }

  let outerClasses = props.active
    ? classes.clickedSpot
    : classes.outerContainer;

  let playerOpacity = player ? 0.4 : 1.0;

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
    setMailClicked(false);
  };

  const spotClickedHandler = () => {
    // let clickedRosterSpot = { parts, index, player };
    props.spotClicked(props.playerInChair);
  };

  return (
    <div
      className={outerClasses}
      style={{ opacity: playerOpacity }}
      style={{ opacity: "0.7" }}
      onClick={spotClickedHandler}
    >
      <div className={classes.partDiv}>{rank === 1 && primaryPart}</div>
      <div className={classes.rankDiv}>{rank}</div>
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
