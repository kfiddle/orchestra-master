import React, { useContext, useState, useEffect } from "react";

import RosterSpot from "../rosterSpot/RosterSpot";

import StringsBox from "../stringsBox/StringsBox";

import { ConsoleHolder } from "../../../../store/object-holder";

import styles from "./RosterSpots.module.css";
import useKeyPress from "../../../../hooks/useKeyPress";
// import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";
import useFetch from "../../../../hooks/useFetch";

const RosterSpots = React.memo((props) => {
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const [doubleClickedSpot, setDoubleClickedSpot] = useState({
    player: null,
    index: null,
  });

  const [addStringsClicked, setAddStringsClicked] = useState(false);

  const pusher = useFetch();

  const upArrowPressed = useKeyPress("ArrowUp");
  const downArrowPressed = useKeyPress("ArrowDown");

  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    setRightClickedSpot(null);
  }, [dashboard.playerChanged]);

  useEffect(() => {
    if (
      (upArrowPressed || downArrowPressed) &&
      doubleClickedSpot.index !== null
    ) {
      const increment = upArrowPressed ? -1 : 1;
      let index = doubleClickedSpot.index;
      let currentList = dashboard.pics;
      let playerToMove = currentList[index].player;
      let playerToSwap = currentList[index + increment].player;
      currentList[index + increment].player = playerToMove;
      if (playerToSwap) {
        currentList[index].player = playerToSwap;
      } else {
        currentList[index].player = null;
      }

      dispatch({ type: "pics", list: currentList });
      setDoubleClickedSpot({
        player: doubleClickedSpot.player,
        index: index + increment,
      });
    }
  }, [upArrowPressed, downArrowPressed]);

  const rightClicker = (rosterSpot) => {
    rightClickedSpot === rosterSpot
      ? setRightClickedSpot(null)
      : setRightClickedSpot(rosterSpot);
  };

  const sendUpNewSeating = async () => {
    let response = await pusher(dashboard.pics, "change-seating");
  };

  const doubleClicker = (player, index) => {
    if (doubleClickedSpot.player === player) {
      setDoubleClickedSpot({ player: null, index: null });

      sendUpNewSeating();
    } else {
      setDoubleClickedSpot({ player, index });
    }
  };

  const doubleClickedCheck = (pic) => {
    return (
      doubleClickedSpot.player !== null &&
      doubleClickedSpot.player === pic.player
    );
  };

  const displayableChairs = dashboard.pics.map((playerChair) => (
    <RosterSpot
      key={Math.random()}
      playerInChair={playerChair}
      index={dashboard.pics.indexOf(playerChair)}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === playerChair ? true : false}
      doubleClicker={doubleClicker}
      doubleClicked={doubleClickedCheck(playerChair)}
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
    <div className={styles.outerContainer}>
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
