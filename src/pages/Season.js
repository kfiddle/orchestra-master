import { useState, useEffect } from "react";
import MasterConsole from "../components/performances/MasterConsole";

import GetAList from "../components/helperFunctions/GetAList";

const Season = (props) => {
  const [listOfPerformances, setListOfPerformances] = useState([]);
  const [clickedPerformance, setClickedPerformance] = useState(null);

  useEffect(() => {
    const getAllPerformances = async () => {
      const allPerformances = await GetAList("get-all-performances");

      if (allPerformances.length > 0) {
        setListOfPerformances(allPerformances);
      }
    };

    if (props.modalIsClosed) {
      getAllPerformances();
    }

    getAllPerformances();
  }, [props.modalIsClosed]);

  const clickedPerformanceHandler = (performance) => {
    setClickedPerformance(performance);
  };

  return (
    <MasterConsole
      list={listOfPerformances}
      clicked={clickedPerformanceHandler}
      activePerformance={clickedPerformance}
    />
  );
};

export default Season;
