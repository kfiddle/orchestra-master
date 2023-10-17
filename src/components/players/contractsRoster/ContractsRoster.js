import { useState, useEffect, useContext } from "react";

import Player from "../Player";
import PlayerInfoBox from "../playerInfoBox/PlayerInfoBox";

// import AllInstruments from "../../../store/all-instruments";
import { insts } from '../../../dummyData/insts';

import useGetAList2 from "../../../hooks/useGetAList2";

import classes from "./ContractsRoster.module.css";

const ContractsRoster = (props) => {
  const [infoBoxClicked, setInfoBoxClicked] = useState(false);
  const [clickedPlayer, setClickedPlayer] = useState({});
  // const { allInstruments } = useContext(AllInstruments);
  const allInsts = Object.values(insts);
  const playersList = props.list;
  console.log(playersList.map(player => player.primaryInst.name))

  const [playerId, setPlayerId] = useState(null);

  const possibleEdit = () => {
    props.possibleEdit(true);
  };

  const clickedPlayerHandler = (player) => {
    setInfoBoxClicked(true);
    setClickedPlayer(player);
    setPlayerId(player.id);
  };

  const sections = allInsts.map((inst) => {
    let filledSection = [];
    for (let player of playersList) {
      if (player.primaryInst.name === inst.name) {
        filledSection.push(
          <Player
            key={player.id}
            player={player}
            clicked={clickedPlayerHandler}
            possibleEdit={possibleEdit}
          ></Player>
        );
      }
    }
    if (filledSection.length === 0) {
      return;
    }
    return (
      <div key={Math.random()} className={classes.section}>
        <div className={classes.sectionTitle}>{inst.name}</div>
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
