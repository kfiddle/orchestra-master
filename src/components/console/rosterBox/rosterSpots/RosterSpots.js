import React, { useContext, useState, useEffect } from "react";

import RosterSpot from "../rosterSpot/RosterSpot";

import StringsBox from "../stringsBox/StringsBox";

import { ConsoleHolder } from "../../../../store/object-holder";

import styles from "./RosterSpots.module.css";

const RosterSpots = React.memo((props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const [doubleClickedSpot, setDoubleClickedSpot] = useState({
    player: null,
    index: null,
  });

  const [addStringsClicked, setAddStringsClicked] = useState(false);

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    setRightClickedSpot(null);
  }, [dashboard.playerChanged]);

  useEffect(() => {
    const doubleClickListener = (event) => {
      let index = doubleClickedSpot.index;
      if (event.keyCode === 38) {
        let currentList = dashboard.pics;
        let playerToMove = currentList[index].player;
        let playerToSwap = currentList[index - 1].player;
        currentList[index - 1].player = playerToMove;
        if (playerToSwap) {
          currentList[index].player = playerToSwap;
        } else {
          currentList[index].player = null;
        }

        dispatch({ type: "pics", list: currentList });
        index = index - 1;
      } else if (event.keyCode === 40) {
        console.log("down");
      }
    };

    if (doubleClickedSpot) {
      document.addEventListener(
        "keyup",
        doubleClickListener
      );
    }

    if (doubleClickedSpot.index === null) {
      document.removeEventListener("keyup", doubleClickListener);
      console.log("removing");
    }
  }, [doubleClickedSpot, dashboard.pics, dispatch]);

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  const doubleClicker = (player, index) => {
    if (doubleClickedSpot.player === player) {
      setDoubleClickedSpot({ player: null, index: null });
    } else {
      setDoubleClickedSpot({ player, index });
    }
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
      // doubleClicked={
      //   doubleClickedSpot.rosterSpot === playerChair ? true : false
      // }
      doubleClicked={
        doubleClickedSpot.player === playerChair.player ? true : false
      }
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
