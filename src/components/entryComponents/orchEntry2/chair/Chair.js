import { useState, useEffect, useContext } from "react";

import InstButton from "../instButton/InstButton";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import { InstrumentationSubmit } from "../../../../store/submit-clicked";

import { PieceHolder } from "../../../../store/object-holder";
import { ShowHolder } from "../../../../store/object-holder";

const Chair = (props) => {
  const [parts, setParts] = useState([]);
  const { submitClicked } = useContext(InstrumentationSubmit);

  const { piece } = useContext(PieceHolder);
  const { show } = useContext(ShowHolder);

  const chairPartz = [parts, setParts];

  const rank = props.rank;
  const primaryPart = props.part;

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

  return (
    <InstButton instrument={primaryPart} rank={rank} chairPartz={chairPartz} />
  );
};

export default Chair;
