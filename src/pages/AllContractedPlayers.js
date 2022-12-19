import { useState } from "react";

import ContractsRoster from "../components/players/contractsRoster/ContractsRoster";
import Player from "../components/players/Player";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import useGetAList2 from "../hooks/useGetAList2";

const AllContractedPlayers = (props) => {
  const [reload, setReload] = useState(false);
  let players = useGetAList2("get-all-contracted-players", reload, setReload);
  let isLoading = !players.length;

  const possibleEdit = () => {
    setReload(true);
  };

  const testList = players.map((player) => (
    <Player
      key={player.id}
      player={player}
      // clicked={clickedPlayerHandler}
      // possibleEdit={setEdit}
    />
  ));

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    // <ContractsRoster list={players} possibleEdit={possibleEdit} />
    <div>{testList}</div>
  );
};

export default AllContractedPlayers;
