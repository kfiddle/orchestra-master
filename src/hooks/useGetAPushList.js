import { useState, useEffect } from "react";

import WhichServer from "../components/helperFunctions/WhichServer";

const useGetAPushList = (object, fetchUrl, reload, setReload) => {
  const [list, setList] = useState([]);
  const whichServer = WhichServer();

  useEffect(() => {
    const getList = async () => {
      try {
        let response = await fetch(whichServer + fetchUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(object),
        });

        setList(response);
        setReload(false);
      } catch (error) {
        return console.log(error);
      }
    };

    getList();
  }, [whichServer, reload]);

  return list;
};

export default useGetAPushList;
