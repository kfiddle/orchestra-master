import { Fragment, useState } from "react";

import Player from "./Player";
import InstrumentsSidebar from "../instrumentsSidebar/InstrumentsSidebar";

import useFetch from "../../hooks/useFetch";

import styles from "./PlayersList.module.css";
import GetAList from "../helperFunctions/GetAList";

const PlayersList = (props) => {
  const [byInstrumentList, setByInstrumentList] = useState([]);
  const [chosenInstrument, setChosenInstrument] = useState("");

  const pusher = useFetch();

  const clickedPlayerHandler = (player) => {
    console.log(player.lastName);
  };

  const possibleEdit = () => {
    props.possibleEdit()
  }

  const partChooser = async (instrument) => {
    setChosenInstrument(instrument);

    const allSubsOfInstrumentResponse = await pusher(instrument, "subs-by-instrument");
    setByInstrumentList(allSubsOfInstrumentResponse);

  };

  const playersToDisplay = byInstrumentList.map((player) => (
    <Player key={player.id} player={player} clicked={clickedPlayerHandler} possibleEdit={possibleEdit} />
  ));

  return (
    <div className={styles.outerContainer}>
      {/* <InstrumentsSidebar
        partChooser={partChooser}
        chosenInstrument={chosenInstrument}
      /> */}
      <div className={styles.playersDiv}>
        <div>{playersToDisplay}</div>
      </div>
    </div>
  );
};

export default PlayersList;
