import WhichServer from "../WhichServer";

const DoubleObjectPush = async (objectToPush, secondObjectToPush, pushFunction) => {
  const whichServer = WhichServer();

  let response = await fetch(whichServer + pushFunction, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectToPush, secondObjectToPush),
  });

  return response;

};

export default DoubleObjectPush;
