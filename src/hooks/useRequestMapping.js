import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const useRequestMapping = () => {
  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const whichServer = WhichServer();

  let headers = { "Content-Type": "application/json" };
  if (jwtToken) {
    headers = { ...headers, Authorization: jwtToken };
  }

  const pusher = async (url) => {
    let response = await fetch(whichServer + url, { headers });

    if (response.ok) {
      let answer = await response.json();
      return answer;
    }
    return false;
  };

  return pusher;
};

export default useRequestMapping;
