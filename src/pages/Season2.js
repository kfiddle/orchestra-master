import { useState, useEffect, useContext } from "react";

import MasterConsole3 from "../components/masterConsole/MasterConsole3";
import LoadingSpinner from "../components/UI/loading/LoadingSpinner";

import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";

const Season2 = (props) => {

  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);
  // const reloadFlag = props.reloadFlag;
  // const setReloadFlag = props.setReloadFlag;

  let allPerformances = useGetAList2("get-performances-by-primary-date", reloadFlag, setReloadFlag);

  let isLoading = allPerformances.length < 1;


  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <MasterConsole3 allPerformances={allPerformances} />
  );
};

export default Season2;
