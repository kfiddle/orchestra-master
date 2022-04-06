import { useState, useEffect } from "react";

import PushBasic from "../components/helperFunctions/pushFunctions/PushBasic";

const useGetAPushList = (fetchUrl) => {
  const [list, setList] = useState([]);
  const [objectToQuery, setObjectToQuery] = useState(null);
  const [reloadFlag, setReloadFlag] = useState(false);

  useEffect(() => {
    const grabList = async () => {
      try {
        const response = await PushBasic(objectToQuery, fetchUrl);
        if (response.ok) {
          let listToSet = await response.json();
          setList(listToSet);
        }
        setReloadFlag(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (objectToQuery || reloadFlag) {
      grabList();
    }

    if (!objectToQuery) {
      setList([]);
    }
  }, [objectToQuery, reloadFlag]);

  return [list, setObjectToQuery, setReloadFlag];
};

export default useGetAPushList;
