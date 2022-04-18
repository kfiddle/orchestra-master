import { useState, useEffect, useContext } from "react";

import InstButton from "../instButton/InstButton";

import PushBasic from "../../../helperFunctions/pushFunctions/PushBasic";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

const Chair = (props) => {
  const [parts, setParts] = useState([]);
  const [rank, setRank] = useState("");
  const { piece, show, submitClicked } = useContext(OrchEntry2FormStore);

  const chairPartz = [parts, setParts, rank, setRank];

  const putItTogether = props.putItTogether;
  const initialRank = props.rank;
  const initialPrimaryPart = props.part;

  useEffect(() => {
    setParts([initialPrimaryPart]);
    setRank(initialRank);
    putItTogether(initialPrimaryPart, initialRank);
  }, [initialPrimaryPart]);

  useEffect(() => {
    const sendItUp = async () => {
      let pieceOrShow = piece ? "piece" : "show";
      let pieceOrShowObject = piece ? piece : show;
      let partsToSend = [];

      for (let part of parts) {
        if (part === "D'AMORE") {
          partsToSend.push("OBOEDAMORE");
        } else {
          partsToSend.push(part);
        }
      }

      let response = await PushBasic(
        {
          parts: partsToSend,
          rank: rank ? rank : 1,
          [pieceOrShow]: pieceOrShowObject,
        },
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

  return (
    <InstButton instrument={parts[0]} rank={rank} chairPartz={chairPartz} />
  );
};

export default Chair;
