import { useState, useEffect } from "react";
import useGetAList3 from "./useGetAList3";

const usePossibleNames = () => {
  const [nameFragment, setNameFragment] = useState("");
  const [possibleMatches, setpossibleMatches] = useState([]);

  const [playersList, setReload] = useGetAList3("get-all-players");

  useEffect(() => {
    const nameTyping = () => {
      if (nameFragment.length < 1) {
        setpossibleMatches([]);
      } else {
        let fragments = playersList.filter(
          (player) =>
            player.lastName.toUpperCase().slice(0, nameFragment.length) ===
            nameFragment.toUpperCase()
        );
        setpossibleMatches(fragments);
      }
    };

    nameTyping();
  }, [nameFragment]);

  return [possibleMatches, setNameFragment];
};

export default usePossibleNames;
