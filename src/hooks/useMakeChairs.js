import { useState, useEffect } from "react";

import Chair from "../components/entryComponents/orchEntry2/chair/Chair";

const useMakeChairs = (part, number, submitFlag) => {
  const [chairsList, setChairsList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  const putItTogether = (part, rank) => {
    let tempList = finalList;
    tempList.push({ part, rank });
    setFinalList(tempList);
  };

  useEffect(() => {
    let tempList = [];
    for (let j = 0; j < number; j++) {
      tempList.push(
        <Chair key={j} part={part} rank={j} putItTogether={putItTogether} />
      );
    }
    setChairsList(tempList);

    if (number === 0) {
      setChairsList([]);
    }
  }, [number]);

  useEffect(() => {
    if (submitFlag) {
      console.log(finalList);
    }
  }, [submitFlag]);

  return chairsList;
};

export default useMakeChairs;
