import { useState, useContext } from "react";

import EmailPlayer from "../../../masterConsole/rosterBox/rosterSpots/rosterSpot/emailPlayer/EmailPlayer";

import { AiOutlineMail } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import useFetch from "../../../../hooks/useFetch";

import RightClick from "./rightClick/RightClick";

import { ChairsHolder } from "../../../../store/object-holder";
import { ConsoleHolder } from "../../../../store/object-holder";

import classes from "./RosterSpot.module.css";
import EditChair from "../../../masterConsole/rosterBox/rosterSpots/rosterSpot/editChair/EditChair";

// RosterSpots has this

const RosterSpot = (props) => {
  const [mailClicked, setMailClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const { chairState, dispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDisp } = useContext(ConsoleHolder);

  const pusher = useFetch();

  let pic = props.pic;
  let chair = pic.chair;
  let index = props.index;
  let { parts, rank, specialDesignate } = chair;

  let player = props.pic.player;
  let sectionSeat = props.pic.sectionSeat;

  const stringParts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];
  let stringPart = stringParts.includes(parts[0]);

  const rightClicker = props.rightClicker;
  const rightClicked = props.rightClicked;
  const doubleClicked = props.doubleClicked;
  const doubleClicker = props.doubleClicker;
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
    setEditClicked(false)
  };

  const spotClickedHandler = async () => {
    dispatch({ type: "chosenPic", chosenPic: pic });
    rightClicker(null);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    rightClicker(props.pic);
    dispatch({ type: "chosenPic", chosenPic: pic });
  };

  const doubleClickHandler = (event) => {
    event.preventDefault();
    doubleClicker(pic, index);
  };

  const removePlayerClicker = async () => {
    let response = await pusher(props.pic, "remove-player-from-pic");

    if (response !== "phoey") {
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
  let doubleClickedClass = doubleClicked ? classes.doubleClicked : null;

  const editClicker = () => {
    setEditClicked(true);
  };

  return (
    <div>
      <div
        className={`${classes.outerContainer} ${marginClass} ${backgroundClass} ${fadeForOtherClass} ${rightClickedClass} ${doubleClickedClass} `}
        onClick={spotClickedHandler}
        onContextMenu={rightClickHandler}
        onDoubleClick={doubleClickHandler}
      >
        <div className={classes.partDiv}>
          {printSectionLabel && primaryPart}
        </div>
        <div className={classes.rankDiv}>{printRankOrSeat}</div>

        <div className={classes.playerDiv}>{lastName}</div>

        <div className={classes.doublingDiv}>{doublingParts}</div>
        <div className={classes.editButtonDiv}>
          <FiEdit className={classes.icon} onClick={editClicker} />
        </div>

        <div className={classes.mailButtonDiv}>
          <AiOutlineMail className={classes.icon} onClick={sendMessage} />
        </div>
        {mailClicked && <EmailPlayer closeModal={closeModal} />}
      </div>

      {rightClicked && (
        <RightClick
          hasPlayer={player ? true : false}
          removePlayerClicker={removePlayerClicker}
          pic={pic}
          rightClicker={rightClicker}
        />
      )}
      {editClicked && <EditChair closeModal={closeModal} pic={pic} />}
    </div>
  );
};

export default RosterSpot;
