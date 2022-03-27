import { useState, useEffect, useContext } from "react";

import InstButton from "../instButton/InstButton";

import PushBasic from '../../../helperFunctions/pushFunctions/PushBasic';

import { InstrumentationSubmit } from "../../../../store/submit-clicked";
import { PieceHolder } from "../../../../store/object-holder";

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
  const { piece } = useContext(PieceHolder);

  const chairPartz = [parts, setParts];

  const rank = props.rank;
  const primaryPart = props.part;
  const show = props.show;

  useEffect(() => {
    setParts([primaryPart]);
  }, [primaryPart]);

  useEffect(() => {
    const sendItUp = async () => {
      let response = await PushBasic(
        { parts: parts, rank: rank, piece: piece },
        "add-chair-to-piece"
      );
      if (response.ok) {
        console.log("gotcha");
      }
    };

    if (submitClicked) {
      sendItUp();
    }
  }, [submitClicked]);

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
        chairPartz={chairPartz}
      />
    );
  } else {
    return null;
  }
};

export default Chair;
