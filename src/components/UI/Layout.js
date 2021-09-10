import { Fragment, useState } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "../mainNavigation/MainNavigation";

import PlayerEntry from "../playerEntry/PlayerEntry";
import PieceEntry from "../pieceEntry/PieceEntry";

const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);
  const [pieceEntryFormRendered, setPieceEntryFormRendered] = useState(false);

  const playerEntryClicked = () => {
    setPlayerEntryFormRendered(true);
  };

  const pieceEntryClicked = () => {
    setPieceEntryFormRendered(true);
  };

  const closeModal = () => {
    setPlayerEntryFormRendered(false);
    setPieceEntryFormRendered(false);
  };

  return (
    <Fragment>
      <MainNavigation
        playerEntryClicked={playerEntryClicked}
        pieceEntryClicked={pieceEntryClicked}
      />
      {playerEntryFormRendered && <PlayerEntry closeModal={closeModal} />}
      {pieceEntryFormRendered && <PieceEntry closeModal={closeModal} />}

      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
