import { useState, useEffect } from "react";

import useGetContractPlayers from "../hooks/useGetContractPlayers";
import ContractsRoster from "../components/players/contractsRoster/ContractsRoster";

import GetAList from "../components/helperFunctions/GetAList";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

const AllContractedPlayers = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listOfContractPlayers, setListOfContractPlayers] = useState([]);

  useEffect(() => {
    const getContractedPlayers = async () => {
      const allContracts = await GetAList("get-all-contracted-players");
      if (allContracts.length > 0) {
        setIsLoading(false);
      }
      setListOfContractPlayers(allContracts);
    };

    if (props.modalIsClosed) {
      getContractedPlayers();
    }

    getContractedPlayers();
  }, [props.modalIsClosed]);

  // return <ContractsRoster list={listOfContractPlayers} />;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ContractsRoster list={listOfContractPlayers} />
  );
};

export default AllContractedPlayers;
