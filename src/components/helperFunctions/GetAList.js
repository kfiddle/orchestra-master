import WhichServer from "./WhichServer";

const GetAList = async (whichList) => {
  const whichServer = WhichServer();

  let response = await fetch(whichServer + whichList);
  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

// const GetAList = async (whichList) => {
//   const whichServer = WhichServer();

//   let listOfThingsFromBackend = await fetch(whichServer + whichList);
//   let incomingList = await listOfThingsFromBackend.json();
//   return incomingList;
// };

export default GetAList;
