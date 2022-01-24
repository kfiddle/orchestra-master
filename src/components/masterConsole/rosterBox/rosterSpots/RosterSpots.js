import { useState, useEffect } from "react";

import RosterSpot from "../../../piece/roster/rosterSpot/RosterSpot";

import styles from "./RosterSpots.module.css";

const RosterSpots = (props) => {
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);

  const chairsToFill = props.chairsToFill;
  const clicked = props.clicked;


  const spotClickHandler = (rosterSpot) => {
    setClickedRosterSpot(rosterSpot);
    clicked(rosterSpot);
  };

  const displayableChairs = chairsToFill.map((chair) => (
    <RosterSpot
      key={Math.random()}
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
