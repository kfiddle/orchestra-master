import { useState, useEffect } from "react";
import { GiConsoleController } from "react-icons/gi";

// import PlayersList from "../components/payees/PayeesList";
import GetAList from "../components/helperFunctions/GetAList";

const AllContractedPlayers = (props) => {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    const getContractedPlayers = async () => {
      const allContracts = await GetAList("get-all-contracted-players");
      setPlayersList(allContracts);
      console.log(allContracts)
    };

    getContractedPlayers();
  }, [playersList]);

  //   return <PayeesList list={payeesList} />;
  return <div>howdy</div>;
};

export default AllContractedPlayers;
