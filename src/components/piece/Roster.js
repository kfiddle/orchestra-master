import { useEffect, useState } from "react";

import RosterSpot from "./RosterSpot";

import GetAList from "../helperFunctions/GetAList";

const Roster = (props) => {
  const [playersList, setPlayersList] = useState([]);
  const [spotClicked, setSpotClicked] = useState({});

  useEffect(() => {
    const getAllPlayers = async () => {
      const allPlayers = await GetAList("get-all-players");
      setPlayersList(allPlayers);
      console.log(allPlayers);
    };

    getAllPlayers();
  }, []);

  const chairsToFill = props.pp.chairsToFill;

  const spotClickHandler = (part) => {
    setSpotClicked(part)
  }

  const displayableSlots = chairsToFill.map((chair) => (
    <RosterSpot
      key={Math.random()}
      pp={props.pp}
      chair={chair}
      index={chairsToFill.indexOf(chair)}
      spotClicked={spotClickHandler}
    />
  ));

  const displayablePossibles = playersList.map(player => (
    <div key={playersList.indexOf(player)}>{player.lastName}</div>
  ))

  return <div>
    {displayableSlots}
    {spotClicked && <div>{displayablePossibles}</div>}

    </div>;
};

export default Roster;
