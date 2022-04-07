import { useEffect, useState } from "react";
import GetAList from "../components/helperFunctions/GetAList";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetAList3 = (listUrl) => {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(false);
  const whichServer = WhichServer();

  useEffect(() => {
    const getList = async () => {
      try {
        let response = await fetch(whichServer + listUrl);
        let jsonified = await response.json();
        setList(jsonified);
        setReload(false);
      } catch (error) {
        return console.log(error);
      }
    };

    if (reload) {
      getList();
    }

    getList();
  }, [whichServer, listUrl, reload]);

  return [list, setReload];
};

export default useGetAList3;