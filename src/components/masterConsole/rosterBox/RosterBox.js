import { useState, useEffect } from "react";

import RosterSpots from "./rosterSpots/RosterSpots";
import Possibles from "./possibles/Possibles";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import styles from "./RosterBox.module.css";

const RosterBox = (props) => {
  const [chairsToFill, setChairsToFill] = useState([]);
  const [possiblePlayers, setPossiblePlayers] = useState([]);
  const [clickedChairIndex, setClickedChairIndex] = useState(0);

  const piece = props.piece;

  useEffect(() => {
    const getTheChairs = async () => {
      let response = await PushBasic(piece, "get-chairs-in-show-piece");
      if (response.ok) {
        let newChairs = await response.json();
        setChairsToFill(newChairs);
      }
      setPossiblePlayers([]);
    };

    getTheChairs();
  }, [piece]);

  const clickedSpotHandler = async (chair) => {
    console.log(chair);

    setClickedChairIndex(chair);

    const response = await PushBasic(chair, "get-possible-players");
    if (response.ok) {
      let listToSet = await response.json();
      setPossiblePlayers(listToSet);
    }
  };

  const doubleClickedPossible = async (player) => {
    let objectToSend = {
      ppId: piece.id,
      player: player,
      chairsListIndex: clickedChairIndex,
    };

    console.log(objectToSend);

    let response = await PushBasic(objectToSend, "put-player-in-chair");
    if (response.ok) {
      setPossiblePlayers([]);
      let response2 = await response.json();
      console.log(response2.chairsToFill);
      setChairsToFill(response2.chairsToFill);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.rosterSpotsDiv}>
        {chairsToFill.length > 0 && (
          <RosterSpots
            chairsToFill={chairsToFill}
            clicked={clickedSpotHandler}
          />
        )}
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
