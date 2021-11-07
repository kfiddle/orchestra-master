import classes from "./ContractsRoster.module.css";

const ContractsRoster = (props) => {
  const playersList = props.list;

  const displayableList = playersList.map(player => (
      <div key={player.id} className={classes.playerContainer}>{player.lastName}</div>
  ))


  return <div className={classes.outerContainer}>{displayableList}</div>
};

export default ContractsRoster;
