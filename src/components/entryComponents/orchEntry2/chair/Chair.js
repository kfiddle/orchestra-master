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
  const [showButton, setShowButton] = useState(false);

  const rank = props.rank;
  const primaryPart = props.part;
  const show = props.show;

  useEffect(() => {
    setParts([primaryPart]);

    if (props.show) {
      setShowButton(true);
    }
  }, [primaryPart, show]);

  const showDoublings = () => {
    console.log(doublingObject[primaryPart]);
  };

  const addPart = (part) => {
    let tempList = parts;
    tempList.push(part);
    setParts(tempList);
  };

  if (showButton) {
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
