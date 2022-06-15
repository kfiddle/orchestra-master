import { useState, useEffect } from "react";

import useGetAList2 from "./useGetAList2";

const useAutoFill = () => {

  const playersList = useGetAList2("get-all-players");
  const [nameFragment, setNameFragment] = useState("");
  const [hintName, setHintName] = useState("");

  useEffect(() => {
    const nameFinder = () => {
      let nameFlag = false;

      for (let player of playersList) {
        let lastName = player.lastName.toUpperCase();
        if (nameFragment === lastName.slice(0, nameFragment.length)) {
          setHintName(lastName);
          nameFlag = true;
        }
      }

      if (!nameFlag || nameFragment.length < 1) {
        setHintName([]);
      }
    };

    nameFinder();
  }, [nameFragment]);

  return [setNameFragment, hintName];
};

export default useAutoFill;
