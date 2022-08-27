import { useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import Shows from "./shows/Shows";
import Pieces from "./pieces/Pieces";

import { ConsoleHolder } from "../../store/object-holder";

import RosterBox from "./rosterBox/RosterBox";
import useFetch from "../../hooks/useFetch";
import useRequestMapping from "../../hooks/useRequestMapping";

//season2 has this

import styles from "./MasterConsole5.module.css";
import useGetAList2 from "../../hooks/useGetAList2";
import useFullOrch from "../../hooks/useFullOrch";

const MasterConsole5 = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();
  const requester = useRequestMapping();

  const grabThePieces = async () => {
    const showPieces = await pusher(
      dashboard.clickedShow,
      "get-showtunes-on-program"
    );
    dispatch({ type: "pieces", list: showPieces });
  };

  const grabPICSFromShow = async () => {
    const directPICS = await pusher(dashboard.clickedShow, "get-pics-in-show");

    if (directPICS.length) {
      dispatch({ type: "pics", list: directPICS });
    }
  };

  useEffect(() => {
    if (dashboard.clickedShow || dashboard.modalClosed) {
      grabThePieces();
      grabPICSFromShow();
      dispatch({ type: "clickedPiece", clickedPiece: null });
      dispatch({ type: "pics", list: [] });
      dispatch({ type: "modalClosed", modalClosed: false });
    }
  }, [dashboard.clickedShow, dashboard.modalClosed]);

  useEffect(() => {
    if (dashboard.refreshPICS) {
      grabPICSFromShow();
      dispatch({ type: "refreshPICS", refreshPICS: false });
    }
  }, [dashboard.refreshPICS]);

  useEffect(() => {
    if (dashboard.refreshPICS) {
      grabPICSFromShow();
    }
  }, [dashboard.refreshPICS]);

  // const grabIt = async () => {
  //   const response = await requester('get-inst-by-name/FLUTE');
  //   console.log(response)
  // }

  const orch = useFullOrch();
  const testOrch = () => {
    for (let key of Object.keys(orch)) {
      console.log(key);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.performancesDiv}>
        <button onClick={testOrch}>TEST</button>
        <Shows />
      </div>
      <div className={styles.piecesDiv}>
        <Pieces />
      </div>
      <div className={styles.rosterBoxDiv}>
        <RosterBox />
      </div>
    </div>
  );
};

export default MasterConsole5;
