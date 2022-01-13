import { useState } from "react";

import EmailPlayer from "./EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import classes from "./RosterSpot.module.css";
const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);

  let performancePiece = props.pp;
  let part = props.chair.part;
  let rank = props.chair.rank;
  let index = props.index;

  let outerClasses = props.active? classes.clickedSpot: classes.outerContainer;

  let player = props.chair.player ? props.chair.player : "";

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
      style={{ opacity: playerOpacity }}
      onClick={spotClickedHandler}
    >
      <div className={classes.partDiv}>{part}</div>
      <div className={classes.playerDiv}>{player}</div>
      <div className={classes.rankDiv}>{rank}</div>

      <div className={classes.mailButtonDiv}>
        <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
      </div>
      {mailClicked && <EmailPlayer closeModal={closeModal} />}
    </div>
  );
};

export default RosterSpot;
