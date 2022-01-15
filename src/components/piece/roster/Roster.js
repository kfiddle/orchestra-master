import { useEffect, useState, useContext } from "react";
import RosterSpot from "./rosterSpot/RosterSpot";
import PossiblePlayersDrop from "../PossiblePlayersDrop";

import AllParts from "../../../store/all-parts";
import useGetAList2 from "../../../hooks/useGetAList2";

import styles from "./Roster.module.css";

const Roster = (props) => {
  const [listFromSpot, setListFromSpot] = useState([]);
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);
  const { partsList } = useContext(AllParts);

  let allPlayers = useGetAList2("get-all-players");

  const chairsToFill =
    props.pp.chairsToFill.length > 0 ? props.pp.chairsToFill : null;

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

  const sections = partsList.map((section) => {
    let filledSection = [];
    for (let chair of chairsToFill) {
      if (chair.part === section) {
        filledSection.push(
          <RosterSpot
            key={Math.random()}
            pp={props.pp}
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
        {filledSection}
      </div>
    );
  });

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
      {/* {displayableSlots} */}
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
