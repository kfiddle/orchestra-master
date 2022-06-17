import { useState, useEffect, useContext } from "react";

import InstButton from "../instButton/InstButton";

import { OrchEntry2FormStore } from "../../../../store/form-holders";

const Chair = (props) => {
  const [parts, setParts] = useState([]);
  const [rank, setRank] = useState("");
  const { piece, show, submitClicked } = useContext(OrchEntry2FormStore);

  const chairPartz = [parts, setParts, rank, setRank];

  const putItTogether = props.putItTogether;
  const initialRank = props.rank;
  const initialPrimaryPart = props.part;

  const initials = { initialPrimaryPart, initialRank };

  useEffect(() => {
    setParts([initialPrimaryPart]);
    setRank(initialRank);
  }, [initialPrimaryPart]);

  useEffect(() => {
    if (submitClicked) {
      putItTogether(parts, rank);
    }
  }, [submitClicked]);

  return (
    <InstButton instrument={parts[0]} rank={rank} chairPartz={chairPartz} initials={initials} />
  );
};

export default Chair;
