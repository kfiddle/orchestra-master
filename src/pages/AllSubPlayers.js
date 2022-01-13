
import PlayersList from "../components/players/PlayersList";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import useGetAList2 from "../hooks/useGetAList2";


const AllSubPlayers = (props) => {
  let players = useGetAList2("get-all-sub-players");
  let isLoading = players.length < 1;

  return isLoading ? <LoadingSpinner /> : <PlayersList list={players} type={"subs"}/>;
 

};


export default AllSubPlayers;



