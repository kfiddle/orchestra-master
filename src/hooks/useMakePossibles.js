import { useEffect, useState } from "react";

import PushBasic from "../components/helperFunctions/pushFunctions/PushBasic";

const useMakePossibles = (clickedRosterSpot) => {
  const [possibles, setPossibles] = useState([]);

  useEffect(() => {
    const getPossiblePlayers = async () => {
      let spotToSend = { pp, indexOfChair: clickedRosterSpot.index };
      const response = await PushBasic(spotToSend, "get-possible-players");
      if (response.ok) {
        let listToSet = await response.json();
        setPossibles(listToSet);
      }
    };

    getPossiblePlayers();
  }, [rosterSpot]);

  return possibles;
};

export default useMakePossibles;
