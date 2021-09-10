import { Fragment, useState } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "../mainNavigation/MainNavigation";

import Modal from "./modal/Modal";

const Layout = (props) => {
  const [playerEntryFormRendered, setPlayerEntryFormRendered] = useState(false);

  const playerEntryClicked = () => {
    setPlayerEntryFormRendered(true);
  };

  const closeModal = () => {
    setPlayerEntryFormRendered(false);
  };

  return (
    <Fragment>
      <MainNavigation playerEntryClicked={playerEntryClicked} />
      {playerEntryFormRendered && <Modal closeModal={closeModal}/>}

      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
