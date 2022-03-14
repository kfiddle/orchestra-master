import { useEffect, useState } from "react";
import GetAList from "../components/helperFunctions/GetAList";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetAList2 = (listUrl, reload, setReload) => {
  const [list, setList] = useState([]);
  const whichServer = WhichServer();

  useEffect(() => {
    const getList = async () => {
      try {
        let response = await fetch(whichServer + listUrl);
        let jsonified = await response.json();
        setList(jsonified)
        setReload(false)
      } catch (error) {
        return console.log(error);
      }
    };

    getList();
  }, [whichServer, listUrl, reload]);

  return list;
};

export default useGetAList2;
