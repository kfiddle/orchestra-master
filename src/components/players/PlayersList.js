import { Fragment, useState } from "react";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Player from "./Player";
import InstrumentsSidebar from "../instrumentsSidebar/InstrumentsSidebar";

import styles from "./PlayersList.module.css";
import GetAList from "../helperFunctions/GetAList";

const PlayersList = (props) => {
  const [byInstrumentList, setByInstrumentList] = useState([]);
  const [chosenInstrument, setChosenInstrument] = useState("");

  const clickedPlayerHandler = (player) => {
    console.log(player.lastName);
  };

  const partChooser = async (part) => {
    setChosenInstrument(part);

    // let contracted = false;
    // if (props.type === "contracts") {
    //   contracted = true;
    // }

    const allSubsOfInstrumentResponse = await GetAList("subs/" + part);
    setByInstrumentList(allSubsOfInstrumentResponse);

  };

  const playersToDisplay = byInstrumentList.map((player) => (
    <Player key={player.id} player={player} clicked={clickedPlayerHandler} />
  ));

  return (
    <div className={styles.outerContainer}>
      <InstrumentsSidebar
        partChooser={partChooser}
        chosenInstrument={chosenInstrument}
      />
      <div className={styles.playersDiv}>
        <div>{playersToDisplay}</div>
      </div>
    </div>
  );
};

export default PlayersList;
