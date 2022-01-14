import { useEffect, useState } from "react";
import GetAList from "../components/helperFunctions/GetAList";

// import GetAList from "../components/helperFunctions/GetAList";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetAList2 = (listUrl) => {
  const [list, setList] = useState([]);
  const whichServer = WhichServer();

  useEffect(() => {
    const getList = async () => {
      try {
        let response = await fetch(whichServer + listUrl);
        let jsonified = await response.json();
        setList(jsonified)
      } catch (error) {
        return console.log(error);
      }
    };

    getList();
  }, [whichServer, listUrl]);

  return list;
};

export default useGetAList2;
