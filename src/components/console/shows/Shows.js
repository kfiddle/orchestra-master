import { useState, useEffect, useContext } from "react";

import Show from "./show/Show";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Shows.module.css";
import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

//MasterConsole4 has this

const Shows = (props) => {
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
    if (dashboard.clickedShow) {
      grabThePieces();
    }
  }, [dashboard.clickedShow]);
  const displayablePerformances = dashboard.shows.map((show) => (
    <Show key={show.id} show={show} />
  ));

  return <div className={styles.outerContainer}>{displayablePerformances}</div>;
};

export default Shows;
