import { useState, useEffect, useContext, useReducer } from "react";

import MasterConsole3 from "../components/masterConsole/MasterConsole3";

import { ConsoleHolder } from "../store/object-holder";

import LoadingSpinner from "../components/UI/loading/LoadingSpinner";
import ReloadFlagStore from "../store/reload-flag-store";

import useGetAList2 from "../hooks/useGetAList2";
import MasterConsole5 from "../components/console/MasterConsole5";


const initialState = {
  shows: [],
  clickedShow: null,
  pieces: [],
  clickedPiece: null,
  pics: [],
  clickedPic: null,
  possibles: [],
  clickedPossible: null,
  playerChanged: false,
  stringNumsSubmitted: false,
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
    case "playerChanged":
      return { ...state, playerChanged: action.playerChanged };
    case "stringNumsSubmitted":
      return { ...state, stringNumsSubmitted: action.stringNumsSubmitted };
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
    <ConsoleHolder.Provider value={{ dashboard, dispatch }}>
      <MasterConsole5 />
    </ConsoleHolder.Provider>
  );
};

export default Season2;
