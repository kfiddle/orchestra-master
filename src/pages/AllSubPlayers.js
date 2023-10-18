import { useState } from "react";

import PlayersList from "../components/players/PlayersList";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import useGetAList2 from "../hooks/useGetAList2";

import players from '../dummyData/players';

const AllSubPlayers = (props) => {
  const [reload, setReload] = useState(false);
  // let players = useGetAList2("get-all-sub-players", reload, setReload);
  let isLoading = !players.length;

  let subs = players.filter((player) => player.type === 'sub');

  const possibleEdit = () => {
    setReload(true);
  };

  return isLoading ? <LoadingSpinner /> : <PlayersList list={subs} type={"subs"} possibleEdit={possibleEdit}/>;
 

};


export default AllSubPlayers;



