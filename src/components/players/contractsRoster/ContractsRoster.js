import { useState, useEffect } from "react";

import Player from "../Player";
import PlayerInfoBox from "../playerInfoBox/PlayerInfoBox";
import GetAList from "../../helperFunctions/GetAList";

import classes from "./ContractsRoster.module.css";

const ContractsRoster = (props) => {
  const [partsList, setPartsList] = useState([]);
  const [infoBoxClicked, setInfoBoxClicked] = useState(false);
  const [clickedPlayer, setClickedPlayer] = useState({});
  const playersList = props.list;

  useEffect(() => {
    const getAllParts = async () => {
      const allParts = await GetAList("get-all-parts");
      if (allParts.length > 0) {
        setPartsList(allParts);
      }
    };

    getAllParts();
    console.log(partsList);
  }, []);

  const clickedPlayerHandler = (player) => {
    setInfoBoxClicked(true);
    setClickedPlayer(player);
  };

  const sections = partsList.map((section) => {
    let filledSection = [];
    for (let player of playersList) {
      if (player.contract.part.toString() === section) {
        filledSection.push(
          <Player
            key={player.id}
            player={player}
            clicked={clickedPlayerHandler}
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
