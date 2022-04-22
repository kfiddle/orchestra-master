import { useState, useEffect } from "react";

import RosterSpots from "./rosterSpots/RosterSpots";
import Possibles from "./possibles/Possibles";

import StringsBox from "./stringsBox/StringsBox";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import styles from "./RosterBox.module.css";

import useGetAPushList from "../../../hooks/useGetAPushList";
import usePossibleNames from "../../../hooks/usePossibleNames";

import { RosterBoxHolder } from "../../../store/object-holder";
import ClickedSpotMenu from "./clickedSpotMenu/ClickedSpotMenu";

//MasterConsole3 has this

const RosterBox = (props) => {
  const [clickedChair, setClickedChair] = useState({});
  const [stringNumbersClicked, setStringNumbersClicked] = useState(false);

  const piece = props.piece;
  const show = props.show;

  const pieceShow = props.piece ? props.piece : props.show;
  const whichFetch = props.piece
    ? "get-pics-in-show-piece"
    : "get-pics-in-show";

  const directList = props.directList;

  const [listOfPossibles, setPICToQuery, possiblesReloader] = useGetAPushList(
    "get-possible-players"
  );

  const [chairsToFill, setObjectToQuery, chairsReloader] =
    useGetAPushList(whichFetch);

  useEffect(() => {
    setObjectToQuery(pieceShow);
    setPICToQuery(null);
  }, [pieceShow, directList]);

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
    if (piece) {
      chairsReloader(true);
    }
  };

  let whichRosterSpots = null;

  if (directList) {
    whichRosterSpots = (
      <RosterSpots
        chairsToFill={directList}
        clicked={clickedSpotHandler}
        chairsReloader={chairsReloader}
      />
    );
  }
  if (chairsToFill.length > 0) {
    whichRosterSpots = (
      <RosterSpots
        chairsToFill={chairsToFill}
        clicked={clickedSpotHandler}
        chairsReloader={chairsReloader}
      />
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

        <div className={styles.possiblesDiv}>
          {clickedChair && <Possibles />}
        </div>
      </div>
    </RosterBoxHolder.Provider>
  );
};

export default RosterBox;
