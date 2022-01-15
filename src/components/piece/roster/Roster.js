import { useEffect, useState } from "react";
import RosterSpot from "./rosterSpot/RosterSpot";
import PossiblePlayersDrop from "../PossiblePlayersDrop";

import GetAList from "../../helperFunctions/GetAList";
import useGetAList2 from "../../../hooks/useGetAList2";

import styles from "./Roster.module.css";

const Roster = (props) => {
  const [listFromSpot, setListFromSpot] = useState([]);
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);

  let allPlayers = useGetAList2("get-all-players");

  const chairsToFill = props.pp.chairsToFill.length > 0 ? props.pp.chairsToFill: null;

  const spotClickHandler = (part, index) => {
    setClickedRosterSpot(index);

    setListFromSpot([]);
    let tempList = [];

    for (let player of allPlayers) {
      for (let playerPart of player.parts) {
        if (playerPart === part) {
          tempList.push(player);
          setListFromSpot(tempList);
        }
      }
    }
  };

  const displayableSlots = chairsToFill.map((chair) => (
    <RosterSpot
      key={Math.random()}
      pp={props.pp}
      chair={chair}
      index={chairsToFill.indexOf(chair)}
      spotClicked={spotClickHandler}
      active={clickedRosterSpot === chairsToFill.indexOf(chair) ? true : false}
    />
  ));

  const playerPlaced = () => {
    props.playerPlaced(true);
  };

  return (
    <div className={styles.rosterDiv}>
      {displayableSlots}
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
