import { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../../store/object-holder";

import useFetch from "../../../../hooks/useFetch";
import useKeyPress from "../../../../hooks/useKeyPress";

import RosterSpot from "../rosterSpot/RosterSpot";
import StringsBox from "../stringsBox/StringsBox";

import styles from "./StringRosterSpots.module.css";

const StringRosterSpots = () => {
  const [addStringsClicked, setAddStringsClicked] = useState(false);
  const [rightClickedSpot, setRightClickedSpot] = useState(null);
  const [doubleClickedSpot, setDoubleClickedSpot] = useState({
    player: null,
    index: null,
  });
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const stringParts = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];
  const strings = [];

  const pusher = useFetch();

  const upArrowPressed = useKeyPress("ArrowUp");
  const downArrowPressed = useKeyPress("ArrowDown");

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

  const doubleClicker = (pic, index) => {
    if (pic.player) {
      if (doubleClickedSpot.player === pic.player) {
        setDoubleClickedSpot({ player: null, index: null });
        sendUpNewSeating();
      } else {
        setDoubleClickedSpot({ player: pic.player, index });
      }
    }
  };

  const doubleClickedCheck = (pic) => {
    return (
      doubleClickedSpot.player !== null &&
      doubleClickedSpot.player === pic.player
    );
  };

  const stringsClicker = () => {
    setAddStringsClicked(true);
  };

  const closeStrings = () => {
    setAddStringsClicked(false);
  };

  for (let pic of dashboard.pics) {
    if (stringParts.includes(pic.chair.parts[0])) {
      strings.push(pic);
    }
  }

  const displayableStrings = strings.map((pic) => (
    <RosterSpot
      key={Math.random()}
      pic={pic}
      index={dashboard.pics.indexOf(pic)}
      rightClicker={rightClicker}
      rightClicked={rightClickedSpot === pic ? true : false}
      doubleClicker={doubleClicker}
      doubleClicked={doubleClickedCheck(pic)}
      fadeForOther={rightClickedSpot && rightClickedSpot !== pic ? true : false}
    />
  ));

  return (
    <div>
      {displayableStrings}
      {displayableStrings.length > 0 && (
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
};

export default StringRosterSpots;