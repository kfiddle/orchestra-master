import React, { useContext, useState, useEffect } from "react";

import RosterSpot from "../rosterSpot/RosterSpot";

import StringsBox from "../stringsBox/StringsBox";

import { ConsoleHolder } from "../../../../store/object-holder";
import { ChairsHolder } from "../../../../store/object-holder";

import styles from "./RosterSpots.module.css";

const RosterSpots = React.memo((props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const [doubleClickedSpot, setDoubleClickedSpot] = useState(null);

  const [addStringsClicked, setAddStringsClicked] = useState(false);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    setRightClickedSpot(null);
  }, [dashboard.playerChanged]);

  const doubleClickedListener = () => {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 38) {
        console.log("up");
      } else if (event.keyCode === 40) {
        console.log("down");
      }
    });
  };

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  const doubleClicker = (rosterSpot) => {
    doubleClickedSpot === rosterSpot
      ? setDoubleClickedSpot(null)
      : setDoubleClickedSpot(rosterSpot) && doubleClickedListener();
  };

  const displayableChairs = dashboard.pics.map((playerChair) => (
    <RosterSpot
      key={Math.random()}
      playerInChair={playerChair}
      index={dashboard.pics.indexOf(playerChair)}
      setMaybies={props.setMaybies}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === playerChair ? true : false}
      doubleClicker={doubleClicker}
      doubleClicked={doubleClickedSpot === playerChair ? true : false}
      fadeForOther={
        rightClickedSpot && rightClickedSpot !== playerChair ? true : false
      }
    />
  ));

  const stringsClicker = () => {
    setAddStringsClicked(true);
  };

  const closeStrings = () => {
    setAddStringsClicked(false);
  };

  return (
    <div>
      {displayableChairs}
      {displayableChairs.length > 0 && (
        <button className={styles.stringsButton} onClick={stringsClicker}>
          EDIT STRING NUMBERS
        </button>
      )}
      {addStringsClicked && (
        <StringsBox
          piece={dashboard.clickedPiece}
          show={dashboard.clickedShow}
          closeModal={closeStrings}
        />
      )}
    </div>
  );
});

export default RosterSpots;
