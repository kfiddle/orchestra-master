import { useState, useEffect } from "react";

import RosterSpot from "./rosterSpot/RosterSpot";

import styles from "./RosterSpots.module.css";

const RosterSpots = (props) => {
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);

  const chairsToFill = props.chairsToFill;
  const clicked = props.clicked;

  const spotClickHandler = (chair) => {
    setClickedRosterSpot(chair);
    clicked(chair);
  };

  const displayableChairs = chairsToFill.map((playerChair) => (
    <RosterSpot
      key={Math.random()}
      playerInChair={playerChair}
      index={chairsToFill.indexOf(playerChair)}
      spotClicked={spotClickHandler}
      active={
        clickedRosterSpot &&
        clickedRosterSpot.index === chairsToFill.indexOf(playerChair)
          ? true
          : false
      }
    />
  ));

  return <div>{displayableChairs}</div>;
};

export default RosterSpots;
