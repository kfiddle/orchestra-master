import { useState, useEffect } from "react";

import PlayersList from "../components/players/PlayersList";
import GetAList from "../components/helperFunctions/GetAList";

const AllSubPlayers = (props) => {
  const [listOfPlayers, setListOfPlayers] = useState([]);

  console.log(props.number);

  useEffect(() => {
    const getSubPlayers = async () => {
      const allSubs = await GetAList("get-all-sub-players");
      setListOfPlayers(allSubs);
    };
    getSubPlayers();

    if (props.modalIsClosed) {
      getSubPlayers();
    }

  }, [props.modalIsClosed]);

  return <PlayersList list={listOfPlayers} type={'subs'} />;
};

export default AllSubPlayers;
