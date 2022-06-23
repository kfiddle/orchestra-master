import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import Shows from "./shows/Shows";
import Pieces from "./pieces/Pieces";

import { ConsoleHolder } from "../../store/object-holder";

import styles from "./MasterConsole4.module.css";
import RosterBox from "./rosterBox/RosterBox";
import useFetch from "../../hooks/useFetch";

//season2 has this

const MasterConsole5 = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  useEffect(() => {
    const grabThePieces = async () => {
      const showPieces = await pusher(
        dashboard.clickedShow,
        "get-showtunes-on-program"
      );
      dispatch({ type: "pieces", list: showPieces });
    };

    const grabPICSFromShow = async () => {
      const directPICS = await pusher(
        dashboard.clickedShow,
        "get-pics-in-show"
      );
      if (directPICS.length > 0) {
        dispatch({ type: "pics", list: directPICS });
      }
    };

    if (dashboard.clickedShow) {
      grabThePieces();
      grabPICSFromShow();
      dispatch({ type: "clickedPiece", clickedPiece: null });
    }

    if (dashboard.playerChanged) {
      grabPICSFromShow();
    }

    if (dashboard.stringNumsSubmitted) {
      grabPICSFromShow();
      dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: false });
    }
  }, [
    dashboard.clickedShow,
    dashboard.stringNumsSubmitted,
    dashboard.playerChanged,
  ]);

  useEffect(() => {}, []);

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

export default MasterConsole5;
