import { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../store/object-holder";

import RosterSpot from "./rosterSpot/RosterSpot";

import styles from "./RosterBox.module.css";

const RosterBox = (props) => {
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);
  const [rightClickedSpot, setRightClickedSpot] = useState(null);

  const { dashboard, dispatch} = useContext(ConsoleHolder);

//   const chairsReloader = props.chairsReloader;

  const spotClickHandler = (chair) => {
    setRightClickedSpot(null);
    setClickedRosterSpot(chair);
  };

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  const displayableChairs = dashboard.pics.map((playerChair) => (
    <RosterSpot
      key={Math.random()}
      playerInChair={playerChair}
      index={dashboard.pics.indexOf(playerChair)}
    //   spotClicked={spotClickHandler}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === playerChair ? true : false}
      fadeForOther={
        rightClickedSpot && rightClickedSpot !== playerChair ? true : false
      }
    //   chairsReloader={chairsReloader}
    />
  ));

  return <div>{displayableChairs}</div>;
};

export default RosterBox;
