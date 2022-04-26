import { useContext, useEffect } from "react";

import Possible from "./possible/Possible";

import { ChairsHolder } from "../../../store/object-holder";
import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./PossiblesBox.module.css";

//rosterBox has this

const PossiblesBox = (props) => {
  const { chairState, dispatch: chairsDispatch } = useContext(ChairsHolder);
  const { dashboard, dashDispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    const emptyPossibles = () => {
      chairsDispatch({ type: "possibles", list: [] });
    };

    emptyPossibles();
  }, [dashboard.clickedPiece, dashboard.clickedShow, dashboard.playerChanged]);

  // const possibles = chairState.possibles;
  const possibles = props.maybies;

  const displayablePossibles = possibles.map((player) => (
    <Possible
      key={possibles.indexOf(player)}
      player={player}
      //   doubleClicked={doubleClickHandler}
    ></Possible>
  ));

  return <div>{displayablePossibles}</div>;
};

export default PossiblesBox;
