import { useState } from "react";

import PlayersList from "../components/players/PlayersList";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import useGetAList2 from "../hooks/useGetAList2";


const AllSubPlayers = (props) => {
  const [reload, setReload] = useState(false);
  let players = useGetAList2("get-all-sub-players", reload, setReload);
  let isLoading = !players.length;

  const possibleEdit = () => {
    setReload(true);
  };

  return isLoading ? <LoadingSpinner /> : <PlayersList list={players} type={"subs"} possibleEdit={possibleEdit}/>;
 

};


export default AllSubPlayers;



