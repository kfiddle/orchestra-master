import { useState, useEffect } from 'react';
import AllPerformances from "../components/performances/AllPerformances";

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

  return <AllPerformances list={listOfPerformances} />;
};

export default Season;
