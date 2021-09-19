import { useState, useEffect } from "react";

import PlayersList from "../components/players/PlayersList";
import GetAList from "../components/helperFunctions/GetAList";

const AllContractedPlayers = (props) => {
  const [listOfPlayers, setListOfPlayers] = useState([]);

  useEffect(() => {
    const getContractedPlayers = async () => {
      const allContracts = await GetAList("get-all-contracted-players");
      setListOfPlayers(allContracts);
    };

    if (props.modalIsClosed) {
      getContractedPlayers();
    }

    getContractedPlayers();
  }, [props.modalIsClosed]);

  return <PlayersList list={listOfPlayers} type={'contracts'} />;
};

export default AllContractedPlayers;
