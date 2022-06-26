import { useState } from "react";

import ContractsRoster from "../components/players/contractsRoster/ContractsRoster";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import useGetAList2 from "../hooks/useGetAList2";

const AllContractedPlayers = (props) => {
  const [reload, setReload] = useState(false);
  let players = useGetAList2("get-all-contracted-players", reload, setReload);
  let isLoading = players.length < 1;


  const possibleEdit = () => {
    setReload(true);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ContractsRoster list={players} possibleEdit={possibleEdit} />
  );
};

export default AllContractedPlayers;
