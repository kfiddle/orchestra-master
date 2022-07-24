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

  const grabThePieces = async () => {
    const showPieces = await pusher(
      dashboard.clickedShow,
      "get-showtunes-on-program"
    );
    dispatch({ type: "pieces", list: showPieces });
  };

  const grabPICSFromShow = async () => {
    const directPICS = await pusher(dashboard.clickedShow, "get-pics-in-show");

    if (directPICS.length > 0) {
      dispatch({ type: "pics", list: directPICS });
    }
  };

  useEffect(() => {
    if (dashboard.clickedShow) {
      grabThePieces();
      grabPICSFromShow();
      dispatch({ type: "clickedPiece", clickedPiece: null });
      dispatch({ type: "pics", list: [] });
    }
  }, [dashboard.clickedShow]);

  useEffect(() => {
    if (dashboard.refreshPICS) {
      grabPICSFromShow();
      dispatch({ type: "refreshPICS", refreshPICS: false });
    }
  }, [dashboard.refreshPICS]);

  useEffect(() => {
    if (dashboard.chairChanged) {
      grabPICSFromShow();
    }
  }, [dashboard.chairChanged]);

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
