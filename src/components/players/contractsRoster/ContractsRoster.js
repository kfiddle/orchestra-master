import { useState, useEffect, useContext } from "react";

import Player from "../Player";
import PlayerInfoBox from "../playerInfoBox/PlayerInfoBox";

import AllInstruments from "../../../store/all-instruments";

import useGetAList2 from "../../../hooks/useGetAList2";

import classes from "./ContractsRoster.module.css";

const ContractsRoster = ({ list: playersList, possibleEdit }) => {
  const [infoBoxClicked, setInfoBoxClicked] = useState(false);
  const [clickedPlayer, setClickedPlayer] = useState({});
  const { allInstruments } = useContext(AllInstruments);

  const [playerId, setPlayerId] = useState(null);

  const setEdit = () => {
    possibleEdit(true);
  };

  const clickedPlayerHandler = (player) => {
    setInfoBoxClicked(true);
    setClickedPlayer(player);
    setPlayerId(player.id);
  };

  const testFullList = playersList.map((player) => (
    <Player
      key={player.id}
      player={player}
      clicked={clickedPlayerHandler}
      possibleEdit={setEdit}
    ></Player>
  ));

  const sections = allInstruments.map((instrument) => {
    let filledSection = [];
    for (let player of playersList) {
      if (player.primaryInstrument.name === instrument.name) {
        filledSection.push(
          <Player
            key={player.id}
            player={player}
            clicked={clickedPlayerHandler}
            possibleEdit={setEdit}
          ></Player>
        );
      }
    }
    if (filledSection.length === 0) {
      return;
    }
    return (
      <div key={Math.random()} className={classes.section}>
        <div className={classes.sectionTitle}>{instrument.name}</div>
        {filledSection}
      </div>
    );
  });

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>{sections}</div>
      {infoBoxClicked && <PlayerInfoBox player={clickedPlayer} />}
    </div>
  );
};

export default ContractsRoster;
