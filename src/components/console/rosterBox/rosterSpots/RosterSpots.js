import { useContext, useState } from "react";

import RosterSpot from "../rosterSpot/RosterSpot";

import { ConsoleHolder } from "../../../../store/object-holder";

import styles from "./RosterSpots.module.css";

const RosterSpots = () => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

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

export default RosterSpots;
