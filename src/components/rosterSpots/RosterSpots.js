import { useState } from "react";

import RosterSpot from "../piece/roster/rosterSpot/RosterSpot";

import styles from "./RosterSpots.module.css";

const RosterSpots = (props) => {
  const [clickedRosterSpot, setClickedRosterSpot] = useState({});
  const chairsToFill = props.chairsToFill;

  const spotClickHandler = (rosterSpot) => {
    setClickedRosterSpot(rosterSpot);
  };

  const displayableChairs = chairsToFill.map((chair) => (
    <RosterSpot
      key={Math.random()}
      //   pp={pp}
      chair={chair}
      index={chairsToFill.indexOf(chair)}
      spotClicked={spotClickHandler}
      active={
        clickedRosterSpot &&
        clickedRosterSpot.index === chairsToFill.indexOf(chair)
          ? true
          : false
      }
    />
  ));

  return <div>{displayableChairs}</div>;
};

export default RosterSpots;
