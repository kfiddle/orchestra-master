import WhichServer from "../WhichServer";

const PushBasic = async (objectToPush, pushFunction) => {
  const whichServer = WhichServer();

  let response = await fetch(whichServer + pushFunction, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectToPush),
  });

  return response;

};

export default PushBasic;
