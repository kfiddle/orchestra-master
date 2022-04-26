import { useState, useContext } from "react";

import EmailPlayer from "../../../masterConsole/rosterBox/rosterSpots/rosterSpot/emailPlayer/EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import RightClick from "./rightClick/RightClick";

import { ChairsHolder } from "../../../../store/object-holder";
import { ConsoleHolder } from "../../../../store/object-holder";

import classes from "./RosterSpot.module.css";

// RosterSpots has this

const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);
  const { chairState, dispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDisp } = useContext(ConsoleHolder);

  let pic = props.playerInChair;
  let chair = pic.chair;
  let { parts, rank, specialDesignate } = chair;
  let player = props.playerInChair.player;
  let sectionSeat = props.playerInChair.sectionSeat;
  const setMaybies = props.setMaybies;

  let stringPart =
    parts[0] === "VIOLIN1" ||
    parts[0] === "VIOLIN2" ||
    parts[0] === "VIOLA" ||
    parts[0] === "CELLO" ||
    parts[0] === "BASS"
      ? true
      : false;

  const rightClicker = props.rightClicker;
  const rightClicked = props.rightClicked;
  const fadeForOther = props.fadeForOther;

  let primaryPart = parts[0];

  let doublingParts = "";

  if (parts.length > 1) {
    for (let j = 1; j < parts.length; j++) {
      doublingParts = doublingParts + "/ " + parts[j];
    }
  }

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

  const spotClickedHandler = async () => {
    // dispatch({ type: "chosenPic", chosenPic: pic });
    rightClicker(null);
    const possiblesList = await PushBasic(pic, "get-possible-players");
    const jsonified = await possiblesList.json();
    setMaybies(jsonified);
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
      dispatch({ type: "chosenPic", chosenPic: null });
      dispatch({ type: "possibles", list: [] });
      dashDisp({ type: "playerChanged", playerChanged: true });
      rightClicker(null);
    }
  };

  let printSectionLabel =
    rank === 1 || (stringPart && sectionSeat === 0) || rightClicked
      ? true
      : false;

  let printRankOrSeat = rank;

  if (stringPart) {
    printRankOrSeat = sectionSeat + 1;
  }
  if (specialDesignate) {
    printRankOrSeat = "A";
  }

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

        <div className={classes.doublingDiv}>{doublingParts}</div>

        <div className={classes.mailButtonDiv}>
          <AiOutlineMail className={classes.mailIcon} onClick={sendMessage} />
        </div>
        {mailClicked && <EmailPlayer closeModal={closeModal} />}
      </div>
      {rightClicked && (
        <RightClick
          hasPlayer={player ? true : false}
          removePlayerClicker={removePlayerClicker}
          pic={pic}
          rightClicker={rightClicker}
          setMaybies={setMaybies}
        />
      )}
    </div>
  );
};

export default RosterSpot;
