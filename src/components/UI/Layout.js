import { Fragment, useState } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "../mainNavigation/MainNavigation";

import PlayerEntry from "../players/PlayerEntry";
import PieceEntry from "../pieceEntry/PieceEntry";
import InstrumentEntry from "../instruments/InstrumentEntry";

const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);
  const [pieceEntryFormRendered, setPieceEntryFormRendered] = useState(false);
  const [instrumentEntryFormRendered, setInstrumentEntryFormRendered] = useState(false);


  const playerEntryClicked = () => {
    setPlayerEntryFormRendered(true);
  };

  const pieceEntryClicked = () => {
    setPieceEntryFormRendered(true);
  };

  const instrumentEntryClicked = () => {
    setInstrumentEntryFormRendered(true);
  };

  

  const closeModal = () => {
    setPlayerEntryFormRendered(false);
    setPieceEntryFormRendered(false);
    setInstrumentEntryFormRendered(false);
  };

  return (
    <Fragment>
      <MainNavigation
        playerEntryClicked={playerEntryClicked}
        pieceEntryClicked={pieceEntryClicked}
        instrumentEntryClicked={instrumentEntryClicked}
      />
      {playerEntryFormRendered && <PlayerEntry closeModal={closeModal} />}
      {pieceEntryFormRendered && <PieceEntry closeModal={closeModal} />}
      {instrumentEntryFormRendered && <InstrumentEntry closeModal={closeModal} />}

      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
