import { useState } from "react";

import EmailPlayer from "./emailPlayer/EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import PushBasic from "../../../../helperFunctions/pushFunctions/PushBasic";
import classes from "./RosterSpot.module.css";
import RightClickMenu from "./rightClickMenu/RightClickMenu";

// Roster has this

const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);

  let { parts, rank } = props.playerInChair.chair;
  let player = props.playerInChair.player;
  let sectionSeat = props.playerInChair.sectionSeat;

  const rightClicker = props.rightClicker;
  const rightClicked = props.rightClicked;
  const fadeForOther = props.fadeForOther;
  const setPlayerChange = props.setPlayerChange;

  let primaryPart = parts[0];
  let doublingPart = parts.length > 1 ? `+${parts[1]}` : "";

  let lastName = "";

  if (player) {
    lastName = player.lastName;
  }

  const sendMessage = () => {
    setMailClicked(true);
  };

  const closeModal = () => {
    setMailClicked(false);
  };

  const spotClickedHandler = () => {
    props.spotClicked(props.playerInChair);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    rightClicker(props.playerInChair);
  };

  const removePlayerClicker = async () => {
    let response = await PushBasic(
      props.playerInChair,
      "remove-player-from-pic"
    );
    if (response.ok) {
      setPlayerChange(true)
    }
  };

  let printSectionLabel = sectionSeat > 0 || rank != 1 ? false : true;
  let printRankOrSeat = sectionSeat > 0 ? sectionSeat : rank;

  let marginClass = !printSectionLabel
    ? classes.sectionMargin
    : classes.sectionHeadMargin;

  let backgroundClass = player ? classes.hired : classes.unHired;

  let fadeForOtherClass = fadeForOther ? classes.fadeForOther : null;
  let rightClickedClass = rightClicked ? classes.rightClicked : null;

  return (
    <div>
      <div
        className={`${classes.outerContainer} ${marginClass} ${backgroundClass} ${fadeForOtherClass} ${rightClickedClass}`}
        onClick={spotClickedHandler}
        onContextMenu={rightClickHandler}
      >
        <div className={classes.partDiv}>
          {printSectionLabel && primaryPart}
        </div>
        <div className={classes.rankDiv}>{printRankOrSeat}</div>
        <div className={classes.playerDiv}>{lastName}</div>
        <div className={classes.doublingDiv}>{doublingPart}</div>

        <div className={classes.mailButtonDiv}>
          <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
        </div>
        {mailClicked && <EmailPlayer closeModal={closeModal} />}
      </div>
      {rightClicked && (
        <RightClickMenu
          hasPlayer={player ? true : false}
          removePlayerClicker={removePlayerClicker}
        />
      )}
    </div>
  );
};

export default RosterSpot;
