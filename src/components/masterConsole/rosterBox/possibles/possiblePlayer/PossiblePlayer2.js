
import PushBasic from "../../../../helperFunctions/pushFunctions/PushBasic";

import classes from "./PossiblePlayer2.module.css";

const PossiblePlayer2 = (props) => {

  const { firstNameArea, lastName } = props.player;
  const doubleClicked = props.doubleClicked;

  let outerContainerClass = classes.unclickedItem;

  const doubleClickHandler = () => {
      doubleClicked(props.player);
  }

  return (
    <div
      className={`${classes.outerContainer} ${outerContainerClass}`}
      onDoubleClick={doubleClickHandler}
    >
      <div className={classes.nameDiv}>
        {firstNameArea} {lastName}{" "}
      </div>
    </div>
  );
};

export default PossiblePlayer2;
