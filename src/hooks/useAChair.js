import { useEffect, useState } from "react";
import usePart from "./usePart";

const useAChair = (initialInst, rank) => {
  const primaryPart = usePart(initialInst, rank);
  const [parts, setParts] = useState();

  useEffect(() => {
    const list = [];
    list.push(primaryPart);
    setParts(list);
  }, [initialInst, rank]);

  const addPart = (part) => {
    let tempList = parts.filter(
      (existingPart) => existingPart.instrument === part.instrument
    );
    if (tempList.length === 0) {
      setParts([...parts, part]);
    }
  };

  const removeAPart = (part) => {
    let tempList = parts.filter(
      (existingPart) => existingPart.instrument !== part.instrument
    );
    setParts(tempList);
  };

  return { parts, addPart, removeAPart };
};

export default useAChair;
