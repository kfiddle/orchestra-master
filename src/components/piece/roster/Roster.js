import { useEffect, useState, useContext } from "react";
import RosterSpot from "./rosterSpot/RosterSpot";
import PossiblePlayersDrop from "../PossiblePlayersDrop";

import AllParts from "../../../store/all-parts";
import useGetAList2 from "../../../hooks/useGetAList2";

import styles from "./Roster.module.css";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

const Roster = (props) => {
  const [listFromSpot, setListFromSpot] = useState([]);
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);
  const [possiblePlayers, setPossiblePlayers] = useState([]);

  const { partsList } = useContext(AllParts);

  const pp = props.pp;

  let allPlayers = useGetAList2("get-all-players");

  useEffect(() => {
    const getPossiblePlayers = async () => {
      let spotToSend = { pp, indexOfChair: clickedRosterSpot.index };
      const response = await PushBasic(spotToSend, "get-possible-players");

      if (response.ok) {
        console.log(response.json());
      }
    };

    if (clickedRosterSpot !== null) {
      getPossiblePlayers();
    }


  }, [clickedRosterSpot]);

  const chairsToFill = pp.chairsToFill.length > 0 ? pp.chairsToFill : null;

  const spotClickHandler = (incomingSpot) => {
    setClickedRosterSpot(incomingSpot);

    setListFromSpot([]);
    let tempList = [];

    for (let player of allPlayers) {
      for (let playerPart of player.parts) {
        if (playerPart === incomingSpot.part) {
          tempList.push(player);
          setListFromSpot(tempList);
        }
      }
    }
  };

  const sections = chairsToFill? partsList.map((section) => {
    let filledSection = [];
    for (let chair of chairsToFill) {
      if (chair.part === section) {
        filledSection.push(
          <RosterSpot
            key={Math.random()}
            pp={pp}
            chair={chair}
            index={chairsToFill.indexOf(chair)}
            spotClicked={spotClickHandler}
            active={
              clickedRosterSpot === chairsToFill.indexOf(chair) ? true : false
            }
          />
        );
      }
    }
    if (filledSection.length === 0) {
      return;
    }

    return (
      <div key={Math.random()} className={styles.section}>
        {chairsToFill && filledSection}
      </div>
    );
  }): '';

  const playerPlaced = () => {
    props.playerPlaced(true);
  };

  return (
    <div className={styles.rosterDiv}>
      {sections}
      <PossiblePlayersDrop
        players={listFromSpot}
        pp={props.pp}
        clickedIndex={clickedRosterSpot}
        playerPlaced={playerPlaced}
      />
    </div>
  );
};

export default Roster;
