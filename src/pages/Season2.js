import { useState, useEffect } from "react";

import MasterConsole3 from "../components/masterConsole/MasterConsole3";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import useGetAList2 from "../hooks/useGetAList2";

const Season2 = (props) => {

  const reloadFlag = props.reloadFlag;
  const setReloadFlag = props.setReloadFlag;

  // let allPerformances = useGetAList2("get-all-performances", reloadFlag, setReloadFlag);
  let allPerformances = useGetAList2("get-performances-by-primary-date", reloadFlag, setReloadFlag);



  let isLoading = allPerformances.length < 1;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <MasterConsole3 allPerformances={allPerformances} />
  );
};

export default Season2;
