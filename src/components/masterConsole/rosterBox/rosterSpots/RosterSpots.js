import { useState, useEffect } from "react";

import RosterSpot from "./rosterSpot/RosterSpot";

import styles from "./RosterSpots.module.css";

const RosterSpots = (props) => {
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);
  const [rightClickedSpot, setRightClickedSpot] = useState(null);

  const chairsToFill = props.chairsToFill;
  const clicked = props.clicked;

  const spotClickHandler = (chair) => {
    setRightClickedSpot(null);
    setClickedRosterSpot(chair);
    clicked(chair);
  };

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  const displayableChairs = chairsToFill.map((playerChair) => (
    <RosterSpot
      key={Math.random()}
      playerInChair={playerChair}
      index={chairsToFill.indexOf(playerChair)}
      spotClicked={spotClickHandler}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === playerChair ? true : false}
      fadeForOther={
        rightClickedSpot && rightClickedSpot !== playerChair ? true : false
      }
    />
  ));

  return <div>{displayableChairs}</div>;
};

export default RosterSpots;
