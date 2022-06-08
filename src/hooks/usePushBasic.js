import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const usePushBasic = () => {
  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const pusher = async (objectToPush, pushFunction) => {
    const whichServer = WhichServer();

    let headers = { "Content-Type": "application/json" };
    if (jwtToken) {
      headers = { ...headers, Authorization: jwtToken };
    }

    let response = await fetch(whichServer + pushFunction, {
      method: "POST",
      headers,
      body: JSON.stringify(objectToPush),
    });
    return response;
  };

  return pusher;
};

export default usePushBasic;
