import { useState, useEffect, useContext } from "react";

import Show from "./show/Show";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Shows.module.css";

//MasterConsole5 has this

const Shows = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const displayablePerformances = dashboard.shows.map((show) => (
    <Show key={show.id} show={show} />
  ));

  return <div className={styles.outerContainer}>{displayablePerformances}</div>;
};

export default Shows;
