import { useState, useEffect } from "react";

import Chair from "../components/entryComponents/orchEntry2/chair/Chair";

const useMakeChairs = (part, rank) => {
  const [playerInChairs, setPlayerInChairs] = useState([]);

  useEffect(() => {
    const createList = () => {
      let tempList = [];

      for (let j = 1; j <= rank; j++) {
        tempList.push(Chair(part, j));
        setPlayerInChairs(tempList);
      }

      if (rank === 0) {
        setPlayerInChairs([]);
      }
    };

    createList();
  }, [rank, part]);

  return playerInChairs;
};

export default useMakeChairs;
