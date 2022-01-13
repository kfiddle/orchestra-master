import { useContext, useEffect } from "react";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./PossiblePlayer.module.css";

const PossiblePlayer = (props) => {
  const { firstNameArea, lastName } = props.player;
  const pp = props.pp;
  let clickedIndex = props.clickedIndex;

  let outerContainerClass = classes.unclickedItem;

  const doubleClickHandler = () => {
    let objectToSend = {
      pieceOnProgram: pp,
      player: props.player,
      chairsListIndex: clickedIndex,
    };

    console.log(objectToSend);

    const sendItUp = async () => {
      let response = await PushBasic(objectToSend, "put-player-in-chair");
      if (response.ok) {
        console.log("yes");
      }
    };
    sendItUp();
    
  };

  return (
    <div
      className={`${classes.outerContainer} ${outerContainerClass}`}
      onDoubleClick={doubleClickHandler}
    >
      <div className={classes.nameDiv}>
        {firstNameArea} {lastName}{" "}
      </div>
    </div>
  );
};

export default PossiblePlayer;
