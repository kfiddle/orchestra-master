import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import WhichServer from "../components/helperFunctions/WhichServer";

const usePushBasic = (object, url) => {
  const [answer, setAnswer] = useState("");
  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  const whichServer = WhichServer();

  useEffect(() => {
    const getAnswer = async () => {
      let headers = { "Content-Type": "application/json" };
      if (jwtToken) {
        headers = { ...headers, Authorization: jwtToken };
      }
      try {
        let response = await fetch(whichServer + url, {
          method: "POST",
          headers,
          body: JSON.stringify(object),
        });

        if (response.ok) {
          let reply = await response.json();
          setAnswer(reply);
        }
      } catch (error) {
        return console.log(error);
      }
    };

    if (object) {
      getAnswer();
    }
  }, [jwtToken, object, url, whichServer]);

  return answer;
};

export default usePushBasic;

//below works but requires one more await on the component calling it. Below just returns the function

// const usePushBasic = () => {
//   const auth = useSelector((state) => state.auth);
//   const { jwtToken } = auth;

//   const pusher = async (objectToPush, url) => {
//     const whichServer = WhichServer();

//     let headers = { "Content-Type": "application/json" };
//     if (jwtToken) {
//       headers = { ...headers, Authorization: jwtToken };
//     }

//     let response = await fetch(whichServer + url, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(objectToPush),
//     });

//     if (response.ok) {
//       let answer = await response.json();
//       return answer;
//     }
//     return "phoey";
//   };

//   return pusher;
// };
