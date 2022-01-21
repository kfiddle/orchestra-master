import { useState, useEffect } from "react";

import MasterConsole3 from "../components/masterConsole/MasterConsole3";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import useGetAList2 from "../hooks/useGetAList2";

const Season2 = () => {
  let allPerformances = useGetAList2("get-all-performances");
  let isLoading = allPerformances.length < 1;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <MasterConsole3 allPerformances={allPerformances} />
  );
};

export default Season2;
