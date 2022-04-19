import { useState, useEffect } from "react";

import RosterSpots from "./rosterSpots/RosterSpots";
import Possibles from "./possibles/Possibles";

import StringsBox from "./stringsBox/StringsBox";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import styles from "./RosterBox.module.css";

import useGetAPushList from "../../../hooks/useGetAPushList";
import { RosterBoxHolder } from "../../../store/object-holder";
import ClickedSpotMenu from "./clickedSpotMenu/ClickedSpotMenu";

//MasterConsole3 has this

const RosterBox = (props) => {
  const [clickedChair, setClickedChair] = useState({});
  const [stringNumbersClicked, setStringNumbersClicked] = useState(false);

  const piece = props.piece;
  const show = props.show;

  const directList = props.directList;

  const [listOfPossibles, setPICToQuery, possiblesReloader] = useGetAPushList(
    "get-possible-players"
  );
  const [chairsToFill, setPieceToQuery, chairsReloader] = useGetAPushList(
    "get-pics-in-show-piece"
  );

  useEffect(() => {
    setPieceToQuery(piece);
    setPICToQuery(null);
  }, [piece, directList]);

  const clickedSpotHandler = async (playerInChair) => {
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
      setPICToQuery(null);
      chairsReloader(true);
    }
  };

  const stringsClicker = () => {
    setStringNumbersClicked(true);
  };

  const closeStrings = () => {
    setStringNumbersClicked(false);
    chairsReloader(true);
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
    <RosterBoxHolder.Provider
      value={{ listOfPossibles, doubleClickedPossible }}
    >
      <div className={styles.outerContainer}>
        <div className={styles.rosterSpotsDiv}>
          {whichRosterSpots}

          <div>
            {whichRosterSpots && (
              <button className={styles.stringsButton} onClick={stringsClicker}>
                EDIT STRING NUMBERS
              </button>
            )}

            {stringNumbersClicked && (
              <StringsBox piece={piece} show={show} closeModal={closeStrings} />
            )}
          </div>
        </div>

        <div className={styles.clickedSpotMenuDiv}>
          {clickedChair && <ClickedSpotMenu playerInChair={clickedChair} />}
        </div>
      </div>
    </RosterBoxHolder.Provider>
  );
};

export default RosterBox;
