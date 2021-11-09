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

  console.log(props.list);

  const instrumentChooser = async (instrument) => {
    setChosenInstrument(instrument);

    let contracted = false;
    if (props.type === "contracts") {
      contracted = true;
    }

    const allPlayersOfInstrumentResponse = await PushBasic(
      instrument,
      "players/" + contracted
    );
    const jsonified = await allPlayersOfInstrumentResponse.json();
    setByInstrumentList(jsonified);
  };

  const playersToDisplay = byInstrumentList.map((player) => (
    <Player key={player.id} player={player} clicked={clickedPlayerHandler} />
  ));

  return (
    <Fragment>
      <ByInstrumentsHeader
        instrumentChooser={instrumentChooser}
        chosenInstrument={chosenInstrument}
      />
      <div className={styles.outerContainer}>
        <div>{playersToDisplay}</div>
      </div>
    </Fragment>
  );
};

export default PlayersList;
