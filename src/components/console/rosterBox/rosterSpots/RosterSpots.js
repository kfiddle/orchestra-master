import React, { useContext, useState, useEffect } from "react";

import RosterSpot from "../rosterSpot/RosterSpot";

import StringsBox from "../stringsBox/StringsBox";

import { ConsoleHolder } from "../../../../store/object-holder";

import styles from "./RosterSpots.module.css";
import useKeyPress from "../../../../hooks/useKeyPress";

const RosterSpots = React.memo((props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const [doubleClickedSpot, setDoubleClickedSpot] = useState({
    player: null,
    index: null,
  });

  const [addStringsClicked, setAddStringsClicked] = useState(false);
  const keyPressed = useKeyPress("ArrowUp");

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    setRightClickedSpot(null);
  }, [dashboard.playerChanged]);

  // useEffect(() => {
  //   const doubleClickListener = (event) => {
  //     // let index = doubleClickedSpot.index;
  //     if (event.keyCode === 38) {
  //       console.log("we are here");
  //       let currentList = dashboard.pics;
  //       let playerToMove = currentList[doubleClickedSpot.index].player;
  //       let playerToSwap = currentList[doubleClickedSpot.index - 1].player;
  //       currentList[doubleClickedSpot.index - 1].player = playerToMove;
  //       if (playerToSwap) {
  //         currentList[doubleClickedSpot.index].player = playerToSwap;
  //       } else {
  //         currentList[doubleClickedSpot.index].player = null;
  //       }

  //       dispatch({ type: "pics", list: currentList });
  //       setDoubleClickedSpot({
  //         player: doubleClickedSpot.player,
  //         index: doubleClickedSpot.index - 1,
  //       });
  //       console.log("resetting the spot");
  //       document.removeEventListener("keyup", doubleClickListener);
  //     } else if (event.keyCode === 40) {
  //       console.log("down");
  //     }
  //   };

  //   document.addEventListener("keyup", doubleClickListener);

  // }, []);

  useEffect(() => {
    console.log(keyPressed);
  }, [keyPressed]);

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

  const keyCheck = (event) => {
    // if (doubleClickedSpot.index !== null) {
    console.log(event.key);
    // }
  };

  return (
    <div className={styles.outerContainer} onKeyDown={keyCheck} tabIndex={0}>
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
