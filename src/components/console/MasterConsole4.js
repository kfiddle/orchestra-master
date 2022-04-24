import { useState, useReducer, useEffect, useContext } from "react";

import Shows from "./shows/Shows";

import { ConsoleHolder } from "../../store/object-holder";

import styles from "./MasterConsole4.module.css";

//season2 has this

const MasterConsole4 = (props) => {

  const { shows } = useContext(ConsoleHolder);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.performancesDiv}>
        <Shows />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MasterConsole4;
