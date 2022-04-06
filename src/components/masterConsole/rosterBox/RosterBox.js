import { useState, useEffect } from "react";

import RosterSpots from "./rosterSpots/RosterSpots";
import Possibles from "./possibles/Possibles";

import StringsBox from "./stringsBox/StringsBox";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import styles from "./RosterBox.module.css";

import useGetAPushList from "../../../hooks/useGetAPushList";

const RosterBox = (props) => {
  const [reload, setReload] = useState(false);
  const [possiblePlayers, setPossiblePlayers] = useState([]);
  const [clickedChair, setClickedChair] = useState({});

  const [stringNumbersClicked, setStringNumbersClicked] = useState(false);

  const piece = props.piece;
  const directList = props.directList;
  console.log(directList);

  const [listOfPossibles, setPICToQuery, possiblesReloader] = useGetAPushList(
    "get-possible-players"
  );
  const [chairsToFill, setPieceToQuery, chairsReloader] = useGetAPushList(
    "get-pics-in-show-piece"
  );

  useEffect(() => {
    setPieceToQuery(piece);

  }, [piece, directList, reload]);

  const clickedSpotHandler = async (playerInChair) => {
    setPossiblePlayers([]);
    setClickedChair(playerInChair);

    if (!playerInChair.player) {
      setPICToQuery(playerInChair);
    } else if (playerInChair.player) {
      console.log("delete?");
    }
  };

  const doubleClickedPossible = async (player) => {
    let response = await PushBasic(
      player,
      "put-player-in-pic/" + clickedChair.id
    );

    if (response.ok) {
      possiblesReloader(true)
      chairsReloader(true);
    }
  };

  const stringsClicker = () => {
    setStringNumbersClicked(true);
  };

  const closeStrings = () => {
    setStringNumbersClicked(false);
    setReload(true);
  };

  let whichRosterSpots = null;

  if (directList) {
    whichRosterSpots = (
      <RosterSpots chairsToFill={directList} clicked={clickedSpotHandler} />
    );
  }
  if (chairsToFill.length > 0) {
    whichRosterSpots = (
      <RosterSpots chairsToFill={chairsToFill} clicked={clickedSpotHandler} />
    );
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.rosterSpotsDiv}>
        {whichRosterSpots}

        <div>
          {chairsToFill.length > 0 && (
            <button className={styles.stringsButton} onClick={stringsClicker}>
              EDIT STRING NUMBERS
            </button>
          )}
          {stringNumbersClicked && (
            <StringsBox piece={piece} closeModal={closeStrings} />
          )}
        </div>
      </div>

      <div className={styles.clickedSpotMenuDiv}>
        {listOfPossibles.length > 0 && (
          <Possibles
            possibles={listOfPossibles}
            doubleClicked={doubleClickedPossible}
          />
        )}
      </div>
    </div>
  );
};

export default RosterBox;
