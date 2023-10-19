import { useState, useEffect, useContext, useReducer } from "react";

import { ConsoleHolder } from "../store/object-holder";

import performances from '../dummyData/performances';

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import MasterConsole5 from "../components/console/MasterConsole5";

const initialState = {
  shows: [],
  clickedShowId: null,
  showPieces: [],
  clickedShowPieceId: null,
  pics: [],
  fullRoster: [],
  refreshPICS: false,
  modalClosed: false,
};

const showReducer = (state, action) => {
  switch (action.type) {
    case "shows":
      return { ...state, shows: action.list };
    case "clickedShowId":
      return { ...state, clickedShowId: action.clickedShowId };
    case "showPieces":
      return { ...state, showPieces: action.list };
    case "clickedShowPieceId":
      return { ...state, clickedShowPieceId: action.clickedShowPieceId };
    case "pics":
      return { ...state, pics: action.list };
    case "fullRoster":
      return { ...state, fullRoster: action.list };
    case "refreshPICS":
      return { ...state, refreshPICS: action.refreshPICS };
    case "modalClosed":
      return { ...state, modalClosed: action.modalClosed };
  }
};

const Season2 = () => {
  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);
  const [dashboard, dispatch] = useReducer(showReducer, initialState);

  // let allPerformances = useGetAList2(
  //   "get-performances-by-primary-date",
  //   reloadFlag,
  //   setReloadFlag
  // );

  let allPerformances = performances;

  useEffect(() => {
    dispatch({ type: "shows", list: allPerformances });
  }, [allPerformances]);

  let isLoading = allPerformances.length < 1;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ConsoleHolder.Provider value={{ dashboard, dispatch }}>
      <MasterConsole5 />
    </ConsoleHolder.Provider>
  );
};

export default Season2;
