import { useState, useEffect } from "react";

import Chair from "../components/entryComponents/orchEntry2/chair/Chair";

import PushBasic from "../components/helperFunctions/pushFunctions/PushBasic";

const useMakeChairs = (part, number, submitFlag, pieceShowObject) => {
  const [chairsList, setChairsList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  const { piece, show } = pieceShowObject;

  let pieceOrShow = piece ? "piece" : "show";
  let pieceOrShowObject = piece ? piece : show;

  const putItTogether = (parts, rank) => {
    let tempList = finalList;
    tempList.push({ parts, rank });
    setFinalList(tempList);
  };

  useEffect(() => {
    let tempList = [];
    for (let j = 1; j <= number; j++) {
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
      for (let j = 1; j < finalList.length; j++) {
        let previous = finalList[j - 1];
        let current = finalList[j];

        if (current.parts[0] !== previous.parts[0]) {
          current.rank = 1;
        }

        if (
          current.parts[0] === previous.parts[0] &&
          current.rank != previous.rank + 1
        ) {
          current.rank = previous.rank + 1;
        }
      }

      setTimeout(async () => {
        for (let chair of finalList) {
          if (chair.parts[0] === "D'AMORE") {
            chair.parts[0] = "OBOEDAMORE";
          }
          let response = await PushBasic(
            {
              parts: chair.parts,
              rank: chair.rank,
              [pieceOrShow]: pieceOrShowObject,
            },
            "add-chair-to-" + pieceOrShow
          );
        }
      }, 500);
    }
  }, [submitFlag]);

  return chairsList;
};

export default useMakeChairs;
