import { useEffect, useState } from "react";

import GetAList from "../components/helperFunctions/GetAList";

const useGetContractPlayers = () => {
  const [listOfContractPlayers, setListOfContractPlayers] = useState([]);

  useEffect(() => {
    const getContractedPlayers = async () => {
      const allContracts = await GetAList("get-all-contracts");
      setListOfContractPlayers(allContracts);
    };

    getContractedPlayers();
  }, []);

  

  return listOfContractPlayers;
};

export default useGetContractPlayers;
