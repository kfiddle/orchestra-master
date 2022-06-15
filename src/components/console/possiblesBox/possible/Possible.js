import { useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import { ChairsHolder, ConsoleHolder } from "../../../../store/object-holder";

import classes from "./Possible.module.css";

const Possible = (props) => {
  const { chairState, dispatch: chairsDispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  const player = props.player;
  const { firstNameArea, lastName } = player;

  let outerContainerClass = classes.unclickedItem;

  const doubleClickHandler = async () => {
    let response = await pusher(
      player,
      "put-player-in-pic/" + chairState.chosenPic.id
    );
    if (response !== "phoey") {
      dashDispatch({ type: "playerChanged", playerChanged: true });
      chairsDispatch({ type: "possibles", list: [] });
    }
  };

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

export default Possible;
