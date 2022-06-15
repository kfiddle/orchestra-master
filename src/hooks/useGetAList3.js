import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetAList3 = (listUrl, isSubscribed) => {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(false);

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const whichServer = WhichServer();

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

    if (reload) {
      getList();
    }

    if (!isSubscribed) {
      return;
    }

    getList();
  }, [whichServer, listUrl, reload, isSubscribed]);

  return [list, setReload];
};

export default useGetAList3;
