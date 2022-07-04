import { useState, useEffect } from "react";

const usePart = (instName, incomingRank) => {
  //   const [instrument, setInstrument] = useState("");
  //   const [rank, setRank] = useState(1);

  //   useEffect(() => {
  //     if (instName) {
  //       setInstrument(instName);
  //     }
  //     if (incomingRank) {
  //       setRank(rank);
  //     }
  //   }, [instName, incomingRank]);

  //   return { instrument, rank };

  return { instrument: instName, rank: incomingRank };
};

export default usePart;
