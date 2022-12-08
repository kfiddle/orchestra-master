import { useState, useEffect, useContext, useReducer } from "react";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import LogEvents from "../components/logFolder/LogEvents";

const Log = ({reloadFlag, setReloadFlag}) => {
  // let allLogEvents = useGetAList2("get-all-log-events");

  // let allLogEvents = useGetAList2("get-log-events-by/DATE");
  // let allLogEvents = useGetAList2("get-sorted-log-events/date");

  // let isLoading = !allLogEvents.length;

  // return isLoading ? <LoadingSpinner /> : <LogEvents events={allLogEvents} />;
  return <LogEvents reloadFlag={reloadFlag} setReloadFlag={setReloadFlag} />;
};

export default Log;
