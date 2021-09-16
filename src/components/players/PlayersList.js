import { Fragment, useState } from "react";

import GetAList from "../helperFunctions/GetAList";
import Player from "./Player";
import ByInstrumentsHeader from "../byInstrumentsHeader/ByInstrumentsHeader";

// import PushSomething from "../helperFunctions/PushSomething";

import styles from "./PlayersList.module.css";

const PlayersList = (props) => {
  const [byInstrumentList, setByInstrumentList] = useState([]);
  const [chosenInstrument, setChosenInstrument] = useState("");


  const clickedPlayerHandler = (player) => {
    console.log(player.lastName);
  };

  const instrumentChooser = async (instrument) => {
    setChosenInstrument(instrument);

    console.log(instrument);
    const allPlayersOfInstrument = await GetAList(
      "subs/" + instrument.instrumentEnum
    );
    setByInstrumentList(allPlayersOfInstrument);
    console.log(byInstrumentList);
  };

  const playersToDisplay = byInstrumentList.map((player) => (
    <Player
      key={player.id}
      player={player}
      clicked={clickedPlayerHandler}
      //   highlighted={player === clickedPlayer}
    />
  ));

  return (
    <Fragment>
      <ByInstrumentsHeader instrumentChooser={instrumentChooser} />
      <div className={styles.outerContainer}>
        <div>{playersToDisplay}</div>
      </div>
    </Fragment>
  );
};

export default PlayersList;
