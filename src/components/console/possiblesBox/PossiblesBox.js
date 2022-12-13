import { useContext, useEffect, useState } from "react";

import Possible from "./possible/Possible";

import { ChairsHolder } from "../../../store/object-holder";
import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./PossiblesBox.module.css";

//rosterBox has this

const PossiblesBox = () => {
  const { chairState, dispatch: chairsDispatch } = useContext(ChairsHolder);
  const { dashboard, dashDispatch } = useContext(ConsoleHolder);
  const [clickedPlayers, setClickedPlayers] = useState([]);

  useEffect(() => {
    const emptyPossibles = () => {
      chairsDispatch({ type: "possibles", list: [] });
    };

    emptyPossibles();
  }, [dashboard.clickedPiece, dashboard.clickedShow, dashboard.chairChanged]);

  useEffect(() => {
    setClickedPlayers([]);
  }, [chairState.chosenPic]);

  const possibles = chairState.possibles;

  const clickHandler = (id) => {
    if (clickedPlayers.includes(id)) {
      let tempList = clickedPlayers;
      tempList.splice(tempList.indexOf(id), 1);
      setClickedPlayers([...tempList]);
    } else {
      setClickedPlayers([...clickedPlayers, id]);
    }
  };

  const displayablePossibles = possibles.map((player) => (
    <Possible
      key={possibles.indexOf(player)}
      player={player}
      clickHandler={clickHandler}
    ></Possible>
  ));

  const clickedIds = () => console.log(clickedPlayers);

  return (
    <div className={styles.outerContainer}>
      {displayablePossibles}
      <button onClick={clickedIds}>EMAIL</button>
    </div>
  );
};

export default PossiblesBox;
