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
  }, [dashboard.clickedPiece, dashboard.clickedShow, dashboard.chairChanged]);

  const possibles = chairState.possibles;

  const ifClicked = (name) => console.log(name);

  const clickedEmail = () => {
    console.log(clickedPossibles);
  };

  const possiblesWithClickedState = possibles.map((possible) => {
    return { ...possible, clicked: false };
  });

  const displayablePossibles = possiblesWithClickedState.map((player) => (
    <Possible
      key={possibles.indexOf(player)}
      player={player}
      ifClicked={false}
      clicked={player.clicked}
    ></Possible>
  ));

  const clickedPossibles = displayablePossibles.filter((possible) => possible);

  return (
    <div className={styles.outerContainer}>
      {displayablePossibles}
      <button onClick={clickedEmail}>EMAIL</button>
    </div>
  );
};

export default PossiblesBox;
