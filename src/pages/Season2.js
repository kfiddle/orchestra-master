import { useState, useEffect } from "react";

import MasterConsole2 from "../components/masterConsole/MasterConsole2";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import useGetAList2 from "../hooks/useGetAList2";

const Season2 = () => {
  const [performances, setPerformances] = useState([]);

  let allPerformances = useGetAList2("get-all-performances");
  let isLoading = allPerformances.length < 1;

  return isLoading ? <LoadingSpinner /> : <MasterConsole2 list={allPerformances} />;
};

export default Season2;
