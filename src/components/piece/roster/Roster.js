import { useEffect, useState, useContext } from "react";
import RosterSpot from "../../masterConsole/rosterBox/rosterSpots/rosterSpot/RosterSpot";
import PossiblePlayersDrop from "../PossiblePlayersDrop";

import AllParts from "../../../store/all-parts";
import useGetAList2 from "../../../hooks/useGetAList2";

import styles from "./Roster.module.css";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

const Roster = (props) => {
  const [clickedRosterSpot, setClickedRosterSpot] = useState(null);
  const [possiblePlayers, setPossiblePlayers] = useState([]);

  const { partsList } = useContext(AllParts);

  const pp = props.piece;
  const chairsToFill = pp.chairsToFill.length > 0 ? props.pp.chairsToFill : [];

  useEffect(() => {
    const getPossiblePlayers = async () => {
      let spotToSend = { pp, indexOfChair: clickedRosterSpot.index };
      const response = await PushBasic(spotToSend, "get-possible-players");
      if (response.ok) {
        let listToSet = await response.json();
        setPossiblePlayers(listToSet);
      }
    };

    if (clickedRosterSpot !== null) {
      getPossiblePlayers();
    }
  }, [clickedRosterSpot, props.playerPlaced]);


  const spotClickHandler = (incomingSpot) => {
    setClickedRosterSpot(incomingSpot);
  };

  const sections = chairsToFill
    ? partsList.map((section) => {
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
                  clickedRosterSpot &&
                  clickedRosterSpot.index === chairsToFill.indexOf(chair)
                    ? true
                    : false
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
      })
    : "";

  const playerPlaced = () => {
    props.playerPlaced(true);
    setPossiblePlayers([]);
  };

  return (
    <div className={styles.rosterDiv}>
      <div>{sections}</div>
      <div>
        {clickedRosterSpot && (
          <PossiblePlayersDrop
            players={possiblePlayers}
            pp={props.pp}
            clickedIndex={clickedRosterSpot.index}
            playerPlaced={playerPlaced}
          />
        )}
      </div>
    </div>
  );
};

export default Roster;
