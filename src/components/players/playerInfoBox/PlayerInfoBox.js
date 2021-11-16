import classes from "./PlayerInfoBox.module.css";

const PlayerInfoBox = (props) => {
  const player = props.player;

  return <div className={classes.infoContainer}>{player.lastName}</div>;
};

export default PlayerInfoBox;
