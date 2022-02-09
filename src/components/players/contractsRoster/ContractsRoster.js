import { useState, useEffect, useContext } from "react";

import Player from "../Player";
import PlayerInfoBox from "../playerInfoBox/PlayerInfoBox";

import GetAList from "../../helperFunctions/GetAList";
import AllParts from "../../../store/all-parts";

import classes from "./ContractsRoster.module.css";

const ContractsRoster = (props) => {
  const [infoBoxClicked, setInfoBoxClicked] = useState(false);
  const [clickedPlayer, setClickedPlayer] = useState({});
  const { partsList } = useContext(AllParts);
  const playersList = props.list;

  console.log(partsList)

  const possibleEdit = () => {
    props.possibleEdit(true);
  };

  const clickedPlayerHandler = (player) => {
    setInfoBoxClicked(true);
    setClickedPlayer(player);
  };

  const sections = partsList.map((section) => {
    let filledSection = [];
    for (let player of playersList) {
      if (player.primaryPart === section) {
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
        <div className={classes.sectionTitle}>{section}</div>
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
