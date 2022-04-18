import { useState, useEffect } from "react";

import Chair2 from "../components/entryComponents/orchEntry2/chair2/Chair2";

const useMakeChairs = (part, number) => {
  const [playerInChairs, setPlayerInChairs] = useState([]);
  const [parts, setParts] = useState([]);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    const createList = () => {
      let tempList = [];

      for (let j = 1; j <= number; j++) {
        tempList.push(Chair2(part, j));
        setPlayerInChairs(tempList);
      }

      if (rank === 0) {
        setPlayerInChairs([]);
      }
    };

    createList();
  }, [number, part]);

  return playerInChairs;
};

export default useMakeChairs;
