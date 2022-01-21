import { useState, useEffect } from "react";

import PushBasic from "../components/helperFunctions/pushFunctions/PushBasic";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetPushList = (pushObject, listUrl) => {
  const [list, setList] = useState([]);
  const whichServer = WhichServer();

  useEffect(() => {
    const getList = async () => {
      if (!pushObject) {
        return;
      }

      try {
        let response = await PushBasic(pushObject, listUrl);
        let jsonified = await response.json();
        setList(jsonified);
      } catch (error) {
        return console.log(error);
      }
    };

    if (pushObject) {
      getList();
    }
  }, [whichServer, listUrl, pushObject]);

  return list;
};

export default useGetPushList;
