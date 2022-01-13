import ContractsRoster from "../components/players/contractsRoster/ContractsRoster";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import useGetAList2 from "../hooks/useGetAList2";

const AllContractedPlayers = (props) => {
  let players = useGetAList2("get-all-contracted-players");
  let isLoading = players.length < 1;

  return isLoading ? <LoadingSpinner /> : <ContractsRoster list={players} />;
};

export default AllContractedPlayers;
