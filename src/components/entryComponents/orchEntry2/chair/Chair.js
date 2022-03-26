import { useState, useEffect } from "react";

import InstButton from "../instButton/InstButton";

const doublingObject = {
  FLUTE: ["PICCOLO", "ALTOFLUTE"],
  OBOE: ["ENGLISHHORN"],
  CLARINET: ["EBCLARINET", "BASSCLARINET"],
  BASSOON: ["CONTRA"],

  HORN: [""],
  TRUMPET: ["CORNET", "FUGALHORN"],
  TROMBONE: ["EUPHONIUM"],
  TUBA: ["EUPHONIUM"],
};

const Chair = (props) => {
  const [parts, setParts] = useState([]);

  const rank = props.rank;
  const primaryPart = props.part;
  const show = props.show;

  useEffect(() => {
    setParts([primaryPart]);
  }, [primaryPart]);

  const showDoublings = () => {
    console.log(doublingObject[primaryPart]);
  };

  const addPart = (part) => {
    let tempList = parts;
    tempList.push(part);
    setParts(tempList);
  };

  if (show) {
    return (
      <InstButton
        instrument={primaryPart}
        rank={rank}
        clicked={showDoublings}
      />
    );
  } else {
    return null;
  }
};

export default Chair;
