import React, { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../../store/object-holder";
import NonStrings from "./NonStrings";
import StringRosterSpots from "./StringRosterSpots";

import styles from "./RosterSpots.module.css";

const RosterSpots = React.memo((props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const { dashboard, dispatch } = useContext(ConsoleHolder);


  useEffect(() => {
    setRightClickedSpot(null);
  }, [dashboard.refreshPICS]);

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  return (
    <div className={styles.outerContainer}>
      <NonStrings rightClicker={rightClicker} rightClickedSpot={rightClickedSpot}/>
      <StringRosterSpots rightClicker={rightClicker} rightClickedSpot={rightClickedSpot}/>
    </div>
  );
});

export default RosterSpots;
