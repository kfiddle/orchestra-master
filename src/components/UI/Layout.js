import { Fragment, useState, useEffect } from "react";
import MainNavigation from "../mainNavigation/MainNavigation";

import PlayerEntry from "../entryComponents/playerEntry/entry/PlayerEntry";
import PieceEntry from "../entryComponents/pieceEntry/PieceEntry";

import PerformanceEntry2 from "../entryComponents/performanceEntry2/PerformanceEntry2";

import AllInstruments from "../../store/all-instruments";

import classes from "./Layout.module.css";
import useGetAList2 from "../../hooks/useGetAList2";
import SideBar from "./sideBar/SideBar";

const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);
  const [pieceEntryFormRendered, setPieceEntryFormRendered] = useState(false);
  const [performanceEntryFormRendered, setPerformanceEntryFormRendered] =
    useState(false);

    const [sideBarOpen, setSideBarOpen] = useState(true);

  const playerEntryClicked = () => {
    setPlayerEntryFormRendered(true);
    props.modalCloseHandler(false);
  };

  const pieceEntryClicked = async () => {
    setPieceEntryFormRendered(true);
    props.modalCloseHandler(false);
  };

  const performanceEntryClicked = () => {
    setPerformanceEntryFormRendered(true);
    props.modalCloseHandler(false);
  };

  const closeModal = () => {
    setPlayerEntryFormRendered(false);
    setPieceEntryFormRendered(false);
    setPerformanceEntryFormRendered(false);
    props.modalCloseHandler(true);
  };

  const stripesHandler = () => setSideBarOpen(previous => !previous)

  let allInstruments = useGetAList2("get-all-instruments");

  return (
    <AllInstruments.Provider value={{ allInstruments }}>
      <MainNavigation
        playerEntryClicked={playerEntryClicked}
        pieceEntryClicked={pieceEntryClicked}
        performanceEntryClicked={performanceEntryClicked}
        modalChange={playerEntryFormRendered}
        stripesHandler={stripesHandler}
      />
      {playerEntryFormRendered && <PlayerEntry closeModal={closeModal} />}
      {pieceEntryFormRendered && <PieceEntry closeModal={closeModal} />}

      {performanceEntryFormRendered && (
        <PerformanceEntry2 closeModal={closeModal} />
      )}

      
      <main className={classes.main}> 
      {sideBarOpen && <SideBar
      playerEntryClicked={playerEntryClicked}
      pieceEntryClicked={pieceEntryClicked}
      performanceEntryClicked={performanceEntryClicked}
      
      />} 
      {props.children}</main>
    </AllInstruments.Provider>
  );
};

export default Layout;
