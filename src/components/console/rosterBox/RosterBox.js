import { useState, useEffect, useContext, useReducer } from "react";
import React from "react";

import RosterSpots from "./rosterSpots/RosterSpots";
import PossiblesBox from "../possiblesBox/PossiblesBox";
import useFetch from "../../../hooks/useFetch";

import { ChairsHolder } from "../../../store/object-holder";

import styles from "./RosterBox.module.css";

const initialState = {
  chosenPic: null,
  possibles: [],
  clickedPossible: null,
};

const chairsReducer = (state, action) => {
  switch (action.type) {
    case "chosenPic":
      return { ...state, chosenPic: action.chosenPic };
    case "possibles":
      return { ...state, possibles: action.list };
  }
};

const RosterBox = (props) => {
  const [chairState, dispatch] = useReducer(chairsReducer, initialState);

  const pusher = useFetch();

  useEffect(() => {
    const getPossibles = async () => {
      const possiblesList = await pusher(
        chairState.chosenPic,
        "get-possible-players"
      );
      dispatch({ type: "possibles", list: possiblesList });
    };

    if (chairState.chosenPic) {
      !chairState.chosenPic.player
        ? getPossibles()
        : dispatch({ type: "possibles", list: [] });
    }
  }, [chairState.chosenPic]);

  return (
    <div className={styles.outerContainer}>
      <ChairsHolder.Provider value={{ chairState, dispatch }}>
        <div>
          <RosterSpots />
        </div>
        <div>
          <PossiblesBox />
        </div>
      </ChairsHolder.Provider>
    </div>
  );
};

export default RosterBox;
