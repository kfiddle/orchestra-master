import { useState } from "react";

const useChair = () => {
  const [parts, setParts] = useState([]);
  const [rank, setRank] = useState("");

  return {parts, rank, setParts, setRank};
};

export default useChair;
