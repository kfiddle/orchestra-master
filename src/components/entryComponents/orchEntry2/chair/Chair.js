import { useState, useEffect, useContext } from "react";

import InstButton from "../instButton/InstButton";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";

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
  const { submitClicked } = useContext(InstrumentationSubmit);

  const chairPartz = [parts, setParts];

  const rank = props.rank;
  const primaryPart = props.part;
  const show = props.show;

  useEffect(() => {
    setParts([primaryPart]);
  }, [primaryPart]);

  useEffect(() => {
    if (submitClicked) {
      console.log(parts);
    }
  }, [submitClicked]);

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
        chairPartz={chairPartz}
      />
    );
  } else {
    return null;
  }
};

export default Chair;
