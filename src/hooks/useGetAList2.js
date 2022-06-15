import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetAList2 = (listUrl, reload, setReload) => {
  const [list, setList] = useState([]);
  const whichServer = WhichServer();

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  useEffect(() => {
    const getList = async () => {
      try {
        let response = await fetch(whichServer + listUrl, {
          headers: { Authorization: jwtToken },
        });
        let jsonified = await response.json();
        setList(jsonified);
        setReload(false);
      } catch (error) {
        return console.log(error);
      }
    };

    getList();
  }, [whichServer, listUrl, reload, jwtToken]);

  return list;
};

export default useGetAList2;
