import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useFetch = (params) => {
  const [data, setData] = useState([]);
  const whichServer = WhichServer();

  const { url, object, reload, setReload } = params;

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  // let response = await fetch(whichServer + pushFunction, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(objectToPush),
  //   });

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(whichServer + url, {
          method: object ? "POST" : "GET",
          headers: { Authorization: jwtToken },
        });
        let jsonified = await response.json();
        setData(jsonified);
        setReload(false);
      } catch (error) {
        return console.log(error);
      }
    };

    getData();
  }, [whichServer, url, reload, jwtToken]);

  return data;
};

export default useFetch;
