import { useState, useEffect } from 'react';
import MasterConsole from "../components/performances/MasterConsole";

import GetAList from "../components/helperFunctions/GetAList";

const Season = (props) => {
  const [listOfPerformances, setListOfPerformances] = useState([]);

  useEffect(() => {
    const getAllPerformances = async () => {
      const allPerformances = await GetAList("get-all-performances");
      setListOfPerformances(allPerformances);
    };

    if (props.modalIsClosed) {
      getAllPerformances();
    }

    getAllPerformances();
  }, [props.modalIsClosed]);

  return <MasterConsole list={listOfPerformances} />;
};

export default Season;
