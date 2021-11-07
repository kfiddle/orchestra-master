import Player from "../Player";

import classes from "./ContractsRoster.module.css";

const ContractsRoster = (props) => {
  const playersList = props.list;

  const clickedPlayerHandler = () => {
    console.log("hello");
  };

  const displayableList = playersList.map((player) => (
    <Player key={player.id} player={player} clicked={clickedPlayerHandler}>
      {player.lastName}
    </Player>
  ));

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>{displayableList}</div>
    </div>
  );
};

export default ContractsRoster;
