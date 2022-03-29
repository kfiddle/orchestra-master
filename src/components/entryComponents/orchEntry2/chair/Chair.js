import { useState, useEffect, useContext } from "react";

import InstButton from "../instButton/InstButton";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";

import { PieceHolder } from "../../../../store/object-holder";
import { ShowHolder } from "../../../../store/object-holder";

// const doublingObject = {
//   FLUTE: ["PICCOLO", "ALTOFLUTE"],
//   OBOE: ["ENGLISHHORN"],
//   CLARINET: ["EBCLARINET", "BASSCLARINET"],
//   BASSOON: ["CONTRA"],

//   HORN: [""],
//   TRUMPET: ["CORNET", "FUGALHORN"],
//   TROMBONE: ["EUPHONIUM"],
//   TUBA: ["EUPHONIUM"],
// };

const Chair = (props) => {
  const [parts, setParts] = useState([]);
  const { submitClicked } = useContext(InstrumentationSubmit);

  const { piece } = useContext(PieceHolder);
  const { show } = useContext(ShowHolder);

  const chairPartz = [parts, setParts];

  const rank = props.rank;
  const primaryPart = props.part;
  const display = props.display;

  useEffect(() => {
    setParts([primaryPart]);
  }, [primaryPart]);

  useEffect(() => {
    const sendItUp = async () => {
      let pieceOrShow = piece ? "piece" : "show";
      let pieceOrShowObject = piece ? piece : show;

      let response = await PushBasic(
        { parts: parts, rank: rank, [pieceOrShow]: pieceOrShowObject },
        "add-chair-to-" + pieceOrShow
      );
      if (!response.ok) {
        console.log(response);
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

  if (display) {
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
