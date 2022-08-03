import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useStringResponse = () => {
  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const whichServer = WhichServer();

  let headers = { "Content-Type": "application/json" };
  if (jwtToken) {
    headers = { ...headers, Authorization: jwtToken };
  }

  const pusher = async (objectToPush, url) => {
    let response = await fetch(whichServer + url, {
      method: "POST",
      headers,
      body: JSON.stringify(objectToPush),
    });

    console.log(response.headers);
  };

  return pusher;
};

export default useStringResponse;
