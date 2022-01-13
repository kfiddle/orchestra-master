import { Fragment, useState, useEffect } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "../mainNavigation/MainNavigation";

import PlayerEntry from "../players/playerEntry/PlayerEntry";
import PieceEntry from "../piece/PieceEntry";
import PerformanceEntry from "../performances/performanceEntry/PerformanceEntry";
import LoadingSpinner from "./loading/LoadingSpinner";

const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);
  const [pieceEntryFormRendered, setPieceEntryFormRendered] = useState(false);
  const [performanceEntryFormRendered, setPerformanceEntryFormRendered] =
    useState(false);

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

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Layout;
