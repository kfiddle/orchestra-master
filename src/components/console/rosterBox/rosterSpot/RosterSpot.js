import { useState, useContext } from "react";

import EmailPlayer from "./emailPlayer/EmailPlayer";
import { AiOutlineMail } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import useFetch from "../../../../hooks/useFetch";

import RightClick from "./rightClick/RightClick";

import { ChairsHolder } from "../../../../store/object-holder";
import { ConsoleHolder } from "../../../../store/object-holder";

import classes from "./RosterSpot.module.css";
import EditChair from "./editChair/EditChair";

// RosterSpots has this

const RosterSpot = function ({
  pic,
  index,
  rightClicker,
  rightClicked,
  doubleClicker,
  doubleClicked,
  fadeForOther,
}) {
  const [mailClicked, setMailClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const { chairState, dispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDisp } = useContext(ConsoleHolder);

  const pusher = useFetch();

  let { parts } = pic;
  let { rank, specialDesignate } = parts[0];

  let player = pic.player;
  let sectionSeat = pic.sectionSeat;

  const stringParts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];
  let stringPart = stringParts.includes(parts[0]);

  let primaryPart = parts[0];
  let primaryPartName = primaryPart.instrument.name;

  let doublingParts = "";

  if (parts.length > 1) {
    for (let j = 1; j < parts.length; j++) {
      doublingParts = doublingParts + "/ " + parts[j].instrument.name;
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
    setEditClicked(false);
  };

  const spotClickedHandler = async () => {
    dispatch({ type: "chosenPic", chosenPic: pic });
    rightClicker(null);
  };

  const rightClickHandler = (event) => {
    event.preventDefault();
    rightClicker(pic);
    dispatch({ type: "chosenPic", chosenPic: pic });
  };

  const doubleClickHandler = (event) => {
    event.preventDefault();
    doubleClicker(pic, index);
  };

  const removePlayerClicker = async () => {
    let response = await pusher(pic, "remove-player-from-pic");

    if (response !== "phoey") {
      dispatch({ type: "chosenPic", chosenPic: null });
      dispatch({ type: "possibles", list: [] });
      dashDisp({ type: "refreshPICS", refreshPICS: true });
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
        className={`${classes.outerContainer} ${marginClass} ${backgroundClass} ${fadeForOtherClass} ${rightClickedClass} ${doubleClickedClass}`}
        onClick={spotClickedHandler}
        onContextMenu={rightClickHandler}
        onDoubleClick={doubleClickHandler}
      >
        <div className={classes.partDiv}>
          {printSectionLabel && primaryPartName}
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
          removePlayerClicker={removePlayerClicker}
          pic={pic}
          rightClicker={rightClicker}
        />
      )}
      {editClicked && <EditChair closeModal={closeModal} incomingPic={pic} />}
    </div>
  );
};

export default RosterSpot;
