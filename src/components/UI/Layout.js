import { Fragment, useState, useEffect } from "react";
import MainNavigation from "../mainNavigation/MainNavigation";

import PlayerEntry from "../entryComponents/playerEntry/entry/PlayerEntry";
import PieceEntry from "../entryComponents/pieceEntry/PieceEntry";
import PerformanceEntry from "../performances/performanceEntry/PerformanceEntry";

import GetAList from "../helperFunctions/GetAList";
import AllParts from "../../store/all-parts";

import classes from "./Layout.module.css";

const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);
  const [pieceEntryFormRendered, setPieceEntryFormRendered] = useState(false);
  const [performanceEntryFormRendered, setPerformanceEntryFormRendered] =
    useState(false);

  const [partsList, setPartsList] = useState([]);

  const playerEntryClicked = () => {
    setPlayerEntryFormRendered(true);
    props.modalCloseHandler(false);
  };

  const pieceEntryClicked = () => {
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

  useEffect(() => {
    const getAllParts = async () => {
      const allParts = await GetAList("get-all-parts");
      if (allParts.length > 0) {
        setPartsList(allParts);
      }
    };

    getAllParts();
  }, []);

  return (
    <AllParts.Provider value={{ partsList }}>
      <MainNavigation
        playerEntryClicked={playerEntryClicked}
        pieceEntryClicked={pieceEntryClicked}
        performanceEntryClicked={performanceEntryClicked}
        modalChange={playerEntryFormRendered}
      />
      {playerEntryFormRendered && <PlayerEntry closeModal={closeModal} />}
      {pieceEntryFormRendered && <PieceEntry closeModal={closeModal} />}

      {performanceEntryFormRendered && (
        <PerformanceEntry closeModal={closeModal} />
      )}

      <main className={classes.main}>{props.children}</main>
    </AllParts.Provider>
  );
};

export default Layout;
