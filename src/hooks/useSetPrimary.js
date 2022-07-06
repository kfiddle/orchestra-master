import { useEffect } from "react";

import { Chair, Part } from "../components/entryComponents/instEntry2/Chair";

const useSetPrimary = (num, instName, chairs, chairsSetter) => {
  useEffect(() => {
    const setNums = () => {
      let list = [];
      for (let j = 1; j <= num; j++) {
        let parts = [];
        let part = Part(instName, j);
        parts.push(part);
        let chair = Chair(parts);
        console.log(chair);
        list.push(chair);
      }
      chairsSetter([...chairs, ...list]);
    };

    setNums();
  }, [num]);
};

export default useSetPrimary;
