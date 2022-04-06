import { useState, useEffect } from "react";

import PushBasic from "../components/helperFunctions/pushFunctions/PushBasic";

const useGetPossiblePlayers = (reloadFlag) => {
  const [listOfPossibles, setListOfPossibles] = useState([]);
  const [picToQuery, setPicToQuery] = useState(null);

  useEffect(() => {
    const grabPossibles = async () => {
      const response = await PushBasic(picToQuery, "get-possible-players");
      if (response.ok) {
        let listToSet = await response.json();
        setListOfPossibles(listToSet);
        console.log(listToSet);
      }
    };
    try {
    } catch (error) {
      console.log(error);
    }

    if (picToQuery) {
      grabPossibles();
    }
  }, [picToQuery, reloadFlag]);

  return [listOfPossibles, reloadFlag, setPicToQuery];
};

export default useGetPossiblePlayers;
