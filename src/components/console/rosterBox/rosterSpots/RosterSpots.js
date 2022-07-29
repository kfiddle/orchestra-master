import React, { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../../store/object-holder";
import NonStrings from "./NonStrings";
import StringRosterSpots from "./StringRosterSpots";
import AddChairBox from "./addChairBox/AddChairBox";

import styles from "./RosterSpots.module.css";

const RosterSpots = React.memo((props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const [addChairClicked, setAddChairClicked] = useState(false);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    setRightClickedSpot(null);
  }, [dashboard.refreshPICS]);

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  let showAddChairButton = false;
  if (dashboard.pieces && dashboard.clickedPiece) {
    showAddChairButton = true;
  } else if (dashboard.clickedShow && dashboard.pieces.length === 0) {
    showAddChairButton = true;
  }

  const toggleAddChairBox = (onOff) => {
    setAddChairClicked(onOff);
  };

  return (
    <div className={styles.outerContainer}>
      {showAddChairButton && (
        <button
          className={styles.addChairButton}
          onClick={() => toggleAddChairBox(true)}
        >
          ADD CHAIR
        </button>
      )}

      <NonStrings
        rightClicker={rightClicker}
        rightClickedSpot={rightClickedSpot}
      />
      <StringRosterSpots
        rightClicker={rightClicker}
        rightClickedSpot={rightClickedSpot}
      />
      {addChairClicked && (
        <AddChairBox closeModal={() => toggleAddChairBox(false)} />
      )}
    </div>
  );
});

export default RosterSpots;
