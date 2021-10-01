

import classes from './RosterSpot.module.css';
const RosterSpot = props => {

return <div className={classes.outerContainer}>{props.instrument} {props.player}</div>

};

export default RosterSpot;