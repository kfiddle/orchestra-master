import { useState } from "react";

import EmailPlayer from "./EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import classes from "./RosterSpot.module.css";
const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);

  let performancePiece = props.pp;

  let { player, part, rank } = props.chair;

  let lastName = "";

  if (player) {
    lastName = player.lastName;
  }

  let index = props.index;

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
    props.spotClicked(part, index);
  };

  return (
    <div
      className={outerClasses}
      // style={{ opacity: playerOpacity }}
      style={{ opacity: "0.7" }}
      onClick={spotClickedHandler}
    >
      <div className={classes.partDiv}>{part}</div>
      <div className={classes.playerDiv}>{lastName}</div>
      <div className={classes.rankDiv}>{rank}</div>

      <div className={classes.mailButtonDiv}>
        <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
      </div>
      {mailClicked && <EmailPlayer closeModal={closeModal} />}
    </div>
  );
};

export default RosterSpot;
