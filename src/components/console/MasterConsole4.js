import { useState, useReducer, useEffect, useContext } from "react";

import Shows from "./shows/Shows";
import Pieces from "./pieces/Pieces";

import { ConsoleHolder } from "../../store/object-holder";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import styles from "./MasterConsole4.module.css";
import RosterBox from "./rosterBox/RosterBox";
import PossiblesBox from "./possiblesBox/PossiblesBox";

//season2 has this

const MasterConsole4 = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    const grabThePieces = async () => {
      const showPieces = await PushBasic(
        dashboard.clickedShow,
        "get-showtunes-on-program"
      );
      const jsonified = await showPieces.json();
      dispatch({ type: "pieces", list: jsonified });
    };

    const grabPICSFromShow = async () => {
      const directPICS = await PushBasic(
        dashboard.clickedShow,
        "get-pics-in-show"
      );
      const jsonified = await directPICS.json();
      dispatch({ type: "pics", list: jsonified });
    };

    if (dashboard.clickedShow) {
      grabThePieces();
      grabPICSFromShow();
      dispatch({ type: "clickedPiece", clickedPiece: null });
    }

    if (dashboard.stringNumsSubmitted) {
      grabPICSFromShow();
      dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: false });
    }
  }, [dashboard.clickedShow, dashboard.stringNumsSubmitted]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.performancesDiv}>
        <Shows />
      </div>
      <div>
        <Pieces />
      </div>
      <div>
        <RosterBox />
      </div>
    </div>
  );
};

export default MasterConsole4;
