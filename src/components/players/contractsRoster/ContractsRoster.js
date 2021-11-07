import classes from "./ContractsRoster.module.css";

const ContractsRoster = (props) => {
  const playersList = props.list;

  const displayableList = playersList.map(player => (
      <div key={player.id}>{player.lastName}</div>
  ))


  return <div>{displayableList}</div>
};

export default ContractsRoster;
