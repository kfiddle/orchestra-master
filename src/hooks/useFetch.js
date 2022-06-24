import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useFetch = () => {
  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const pusher = async (objectToPush, url) => {
    const whichServer = WhichServer();

    let headers = { "Content-Type": "application/json" };
    if (jwtToken) {
      headers = { ...headers, Authorization: jwtToken };
    }

    let response = await fetch(whichServer + url, {
      method: "POST",
      headers,
      body: JSON.stringify(objectToPush),
    });

    if (response.ok) {
      let answer = await response.json();
      return answer;
    }
    return "phoey";
  };

  return pusher;
};

export default useFetch;
