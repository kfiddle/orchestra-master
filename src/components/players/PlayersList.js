import { Fragment, useState } from "react";

import PushBasic from "../helperFunctions/pushFunctions/PushBasic";
import Player from "./Player";
import InstrumentsSidebar from "../instrumentsSidebar/InstrumentsSidebar";

// import PushSomething from "../helperFunctions/PushSomething";

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

    let contracted = false;
    if (props.type === "contracts") {
      contracted = true;
    }

    // const allPlayersOfInstrumentResponse = await PushBasic(
    //   instrument,
    //   "players/" + contracted
    // );
    // const jsonified = await allPlayersOfInstrumentResponse.json();

    const allSubsOfInstrumentResponse = await GetAList("/subs/" + part);
    setByInstrumentList(allSubsOfInstrumentResponse);

    // setByInstrumentList(jsonified);
  };

  const playersToDisplay = byInstrumentList.map((player) => (
    <Player key={player.id} player={player} clicked={clickedPlayerHandler} />
  ));

  return (
    <Fragment>
      <InstrumentsSidebar
        partChooser={partChooser}
        chosenInstrument={chosenInstrument}
      />
      <div className={styles.outerContainer}>
        <div>{playersToDisplay}</div>
      </div>
    </Fragment>
  );
};

export default PlayersList;
