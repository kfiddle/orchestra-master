import { useContext, useEffect } from "react";

import classes from "./PossiblePlayer.module.css";

const PossiblePlayer = (props) => {
  const { firstNameArea, lastName } = props.player;

  let outerContainerClass = classes.unclickedItem;

  return (
    <div className={`${classes.outerContainer} ${outerContainerClass}`}>
      <div className={classes.firstNameAreaDiv}>{firstNameArea}</div>
      <div className={classes.lastNameDiv}>{lastName}</div>
    </div>
  );
};

export default PossiblePlayer;
