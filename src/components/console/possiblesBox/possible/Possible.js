import { useState, useContext } from "react";

import useFetch from "../../../../hooks/useFetch";

import { ChairsHolder, ConsoleHolder } from "../../../../store/object-holder";

import classes from "./Possible.module.css";

const Possible = ({ player, clickHandler, clicked }) => {
  const { chairState, dispatch: chairsDispatch } = useContext(ChairsHolder);
  const { dashboard, dispatch: dashDispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  const { firstNameArea, lastName, id } = player;

  let outerContainerClass = !clicked ? classes.unclickedItem : classes.clicked;

  const doubleClickHandler = async () => {
    let response = await pusher(
      player,
      "put-player-in-pic/" + chairState.chosenPic.id
    );
    if (response !== "phoey") {
      dashDispatch({ type: "refreshPICS", refreshPICS: true });
      chairsDispatch({ type: "possibles", list: [] });
    }
  };

  const clicker = () => clickHandler(player);

  return (
    <div
      className={`${classes.outerContainer} ${outerContainerClass}`}
      onClick={clicker}
      onDoubleClick={doubleClickHandler}
    >
      <div className={classes.nameDiv}>
        {firstNameArea} {lastName}{" "}
      </div>
    </div>
  );
};

export default Possible;
