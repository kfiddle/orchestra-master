import { useState, useEffect } from "react";

import useGetContractPlayers from "../hooks/useGetContractPlayers";
import ContractsRoster from "../components/players/contractsRoster/ContractsRoster";

import GetAList from "../components/helperFunctions/GetAList";

const AllContractedPlayers = (props) => {
  const [listOfContractPlayers, setListOfContractPlayers] = useState([]);

  useEffect(() => {
    const getContractedPlayers = async () => {
      const allContracts = await GetAList("get-all-contracted-players");
      console.log(allContracts);
      setListOfContractPlayers(allContracts);
    };

    if (props.modalIsClosed) {
      getContractedPlayers();
    }

    getContractedPlayers();
  }, [props.modalIsClosed]);

  return <ContractsRoster list={listOfContractPlayers} />;
};

export default AllContractedPlayers;
