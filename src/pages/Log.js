import { useState, useEffect, useContext, useReducer } from "react";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import LogEvents from "../components/logFolder/LogEvents";

const Log = ({ reloadFlag, setReloadFlag }) => {
  return <LogEvents reloadFlag={reloadFlag} setReloadFlag={setReloadFlag} />;
};

export default Log;
