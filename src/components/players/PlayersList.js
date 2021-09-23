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

  const instrumentChooser = async (instrumentString) => {
    setChosenInstrument(instrumentString);
    let instrumentToSend =
      instrumentString === "Eb Clarinet"
        ? "EBCLARINET"
        : instrumentString.toUpperCase();

    const allPlayersOfInstrument = await GetAList(
      props.type + "/" + instrumentToSend
    );
    if (allPlayersOfInstrument) {
      setByInstrumentList(allPlayersOfInstrument);
    }
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
