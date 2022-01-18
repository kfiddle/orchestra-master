import WhichServer from "./WhichServer";

const GetAList = async (whichList) => {
  const whichServer = WhichServer();

  try {
    let response = await fetch(whichServer + whichList);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    return [];
  }
};

export default GetAList;
