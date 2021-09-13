import { Fragment, useState } from "react";

import Player from "./Player";
import ByInstrumentsHeader from '../byInstrumentsHeader/ByInstrumentsHeader';

// import PushSomething from "../helperFunctions/PushSomething";

import styles from "./PlayersList.module.css";

const PlayersList = (props) => {
  //   const [clickedFoundation, setClickedFoundation] = useState(null);
  //   const [foundationItemsList, setFoundationItemsList] = useState([]);

  //   const clickedFoundationHandler = async (foundation) => {
  //     setClickedFoundation(foundation);
  //     let response = await PushSomething(
  //       foundation,
  //       "/get-foundation-items-from-foundation"
  //     );
  //     let finalFoundationItemsList = await response.json();
  //     setTimeout(() => setFoundationItemsList(finalFoundationItemsList), 100);
  //   };

  console.log(props.modalChange);

  const clickedPlayerHandler = (player) => {
    console.log(player.lastName);
  };

  const playersToDisplay = props.list.map((player) => (
    <Player
      key={player.id}
      player={player}
      clicked={clickedPlayerHandler}
      //   highlighted={player === clickedPlayer}
    />
  ));

  return (
    <Fragment>
      <ByInstrumentsHeader />
      <div className={styles.outerContainer}>
        <div>{playersToDisplay}</div>
      </div>
    </Fragment>
  );
};

export default PlayersList;
