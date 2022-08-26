import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useRequestMapping = (url) => {
  const whichServer = WhichServer();

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const getResponse = async () => {
    if (!jwtToken) {
      return;
    } else {
      try {
        let response = await fetch(whichServer + url, {
          headers: { Authorization: jwtToken },
        });
        return await response.json();
      } catch (error) {
        return console.log(error);
      }
    }
  };

  return getResponse;
};

export default useRequestMapping;
