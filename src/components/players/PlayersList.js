import { Fragment, useState } from "react";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
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
    setChosenInstrument(instrument.name);

    console.log(instrument);

    let typeToSend = '';
    props.type === 'Subs'? typeToSend = 'SUB' : typeToSend = 'CONTRACT';

    const allPlayersOfInstrumentResponse = await PushBasic(instrument, "players/" + typeToSend)
    setByInstrumentList(allPlayersOfInstrumentResponse);
    
    // const jsonified = allPlayersOfInstrumentResponse.json();
    // if (jsonified) {
    // }
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
