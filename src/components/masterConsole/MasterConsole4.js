import { useState } from "react";

import styles from "./MasterConsole4.module.css";

const initialState = {
  performances: [],
  clickedPerformance: null,
  pieces: [],
  clickedPiece: null,
  pics: [],
};

const showReducer = (state, action) => {
  switch (action.type) {
    case 'performances':
      return { ...state, performances: action.list };
    case 'clickedPerformance':
      return { ...state, clickedPerformance: action.clickedPerformance };
    case 'pieces':
      return { ...state, pieces: action.list };
    case 'clickedPiece':
      return { ...state, clickedPiece: action.clickedPiece };
    case 'pics':
      return { ...state, pics: action.list };
  }
};

const MasterConsole4 = (props) => {
  const [showState, dipatch] = useReducer(showReducer, initialState);


};

export default MasterConsole4;
