import classes from "./RosterSpot.module.css";
const RosterSpot = (props) => {
  let player = props.player ? props.player : "";
  let gotPlayer = player? 0.4 : 1.0;

  return (
    <div className={classes.outerContainer} style={{opacity: gotPlayer}}>
      {props.instrument} {player}
    </div>
  );
};

export default RosterSpot;
