import { useState, useEffect } from "react";

import PlayersList from "../components/players/PlayersList";
import GetAList from "../components/helperFunctions/GetAList";

const AllContractedPlayers = (props) => {
  const [listOfPlayers, setListOfPlayers] = useState([]);

  useEffect(() => {
    const getContractedPlayers = async () => {
      const allContracts = await GetAList("get-all-contracted-players");
      setListOfPlayers(allContracts);
      console.log(allContracts);
    };

    getContractedPlayers();
  }, []);

  return <PlayersList list={listOfPlayers} />;
return <div>hey homey</div>
};

export default AllContractedPlayers;
