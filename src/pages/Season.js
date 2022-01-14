import { useState, useEffect } from "react";
import MasterConsole from "../components/masterConsole/MasterConsole";

import ClickedPerformance from "../store/clicked-performance";

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
    <ClickedPerformance.Provider value={{clickedPerformance}}>
      <MasterConsole
        list={listOfPerformances}
        clicked={clickedPerformanceHandler}
        activePerformance={clickedPerformance}
      />
    </ClickedPerformance.Provider>
  );
};

export default Season;
