import { useState, useEffect, useContext } from "react";

import { ConsoleHolder } from "../../../../store/object-holder";

import useFetch from "../../../../hooks/useFetch";
import useKeyPress from "../../../../hooks/useKeyPress";

import RosterSpot from "../rosterSpot/RosterSpot";

import StringsAdjusters from "../stringsAdjusters/StringsAdjusters";

import AddChairBox from "./addChairBox/AddChairBox";
import EditChair from "../rosterSpot/editChair/EditChair";
import StringsBox from "../stringsBox/StringsBox";

import styles from "./StringRosterSpots.module.css";

const StringRosterSpots = ({ rightClicker, rightClickedSpot }) => {
  const [addStringsClicked, setAddStringsClicked] = useState(false);

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
    setAddStringsClicked((previous) => !previous);
  };

  const closeStrings = () => {
    setAddStringsClicked(false);
  };


  for (let pic of dashboard.pics) {
    if (stringParts.includes(pic.parts[0].instrument.name)) {
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
      <div className={styles.buttonsDiv}>

        {displayableStrings.length > 0 && (
          <button className={styles.stringsButton} onClick={stringsClicker}>
            ADJUST STRING NUMBERS
          </button>
        )}
      </div>
    

      <StringsAdjusters strings={strings} visible={addStringsClicked} />
    </div>
  );
};

export default StringRosterSpots;
