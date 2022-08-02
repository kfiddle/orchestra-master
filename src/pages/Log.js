import { useState, useEffect, useContext, useReducer } from "react";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import LogEvents from "../components/logFolder/LogEvents";

const Log = (props) => {
  // let allLogEvents = useGetAList2("get-all-log-events");

  let allLogEvents = useGetAList2("get-log-events-by/DATE");

  let isLoading = allLogEvents.length < 1;

  return isLoading ? <LoadingSpinner /> : 

    <LogEvents events={allLogEvents}/>
  ;
};

export default Log;
