import { useState, useReducer, useEffect, useContext } from "react";

import Shows from "./shows/Shows";
import Pieces from "./pieces/Pieces";

import { ConsoleHolder } from "../../store/object-holder";

import styles from "./MasterConsole4.module.css";
import RosterBox from "./rosterBox/RosterBox";

//season2 has this

const MasterConsole4 = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

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
      <div></div>
    </div>
  );
};

export default MasterConsole4;
