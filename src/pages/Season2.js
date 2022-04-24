import { useState, useEffect, useContext, useReducer } from "react";

import MasterConsole3 from "../components/masterConsole/MasterConsole3";

import { ConsoleHolder } from "../store/object-holder";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import MasterConsole4 from "../components/console/MasterConsole4";
import useGetAPushList from "../hooks/useGetAPushList";

const initialState = {
  shows: [],
  clickedShow: null,
  pieces: [],
  clickedPiece: null,
  pics: [],
};

const showReducer = (state, action) => {
  switch (action.type) {
    case "shows":
      return { ...state, shows: action.list };
    case "clickedShow":
      return { ...state, clickedShow: action.clickedShow };
    case "pieces":
      return { ...state, pieces: action.list };
    case "clickedPiece":
      return { ...state, clickedPiece: action.clickedPiece };
    case "pics":
      return { ...state, pics: action.list };
  }
};

const Season2 = (props) => {
  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);
  const [dashboard, dispatch] = useReducer(showReducer, initialState);

  let allPerformances = useGetAList2(
    "get-performances-by-primary-date",
    reloadFlag,
    setReloadFlag
  );

  useEffect(() => {
    dispatch({ type: "shows", list: allPerformances });
  }, [allPerformances]);

  let isLoading = allPerformances.length < 1;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    // <MasterConsole3 allPerformances={allPerformances} />

    <ConsoleHolder.Provider value={{ dashboard, dispatch }}>
      <MasterConsole4 />
    </ConsoleHolder.Provider>
  );
};

export default Season2;
