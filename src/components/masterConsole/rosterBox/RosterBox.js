import { useState, useEffect } from "react";

import RosterSpots from "./rosterSpots/RosterSpots";
import Possibles from "./possibles/Possibles";

import Modal from "../../UI/modal/Modal";
import StringsBox from "./stringsBox/StringsBox";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import styles from "./RosterBox.module.css";

const RosterBox = (props) => {
  const [chairsToFill, setChairsToFill] = useState([]);
  const [possiblePlayers, setPossiblePlayers] = useState([]);
  const [clickedChair, setClickedChair] = useState({});
  const [playerChange, setPlayerChange] = useState(false);
  const [stringNumbersClicked, setStringNumbersClicked] = useState(false);

  const piece = props.piece;
  const directList = props.directList;

  useEffect(() => {
    const getTheChairs = async () => {
      let response = await PushBasic(piece, "get-pics-in-show-piece");
      if (response.ok) {
        let newChairs = await response.json();
        setChairsToFill(newChairs);
      }
      setPossiblePlayers([]);
    };

    if (playerChange) {
      getTheChairs();
      setPlayerChange(false);
    }

    !directList ? getTheChairs() : setChairsToFill(directList);
  }, [piece, directList, playerChange]);

  const clickedSpotHandler = async (chair) => {
    setClickedChair(chair);

    const response = await PushBasic(chair, "get-possible-players");
    if (response.ok) {
      let listToSet = await response.json();
      setPossiblePlayers(listToSet);
    }
  };

  const doubleClickedPossible = async (player) => {
    let response = await PushBasic(
      player,
      "put-player-in-pic/" + clickedChair.id
    );

    if (response.ok) {
      setPossiblePlayers([]);
      setPlayerChange(true);
    }
  };

  const stringsClicker = () => {
    setStringNumbersClicked(true);
  };

  const closeModal = () => {
    setStringNumbersClicked(false);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.rosterSpotsDiv}>
        {chairsToFill.length > 0 && (
          <RosterSpots
            chairsToFill={chairsToFill}
            clicked={clickedSpotHandler}
            setPlayerChange={setPlayerChange}
          />
        )}

        <div>
          <button className={styles.stringsButton} onClick={stringsClicker}>
            EDIT STRING NUMBERS
          </button>
          {stringNumbersClicked && (
            <StringsBox piece={piece} closeModal={closeModal} />
          )}
        </div>
      </div>

      <div className={styles.possiblesDiv}>
        {possiblePlayers.length > 0 && (
          <Possibles
            possibles={possiblePlayers}
            doubleClicked={doubleClickedPossible}
          />
        )}
      </div>
    </div>
  );
};

export default RosterBox;
