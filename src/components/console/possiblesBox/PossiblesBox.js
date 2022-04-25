import { useContext } from "react";

import PossiblePlayer2 from "../../masterConsole/rosterBox/possibles/possiblePlayer/PossiblePlayer2";

import { ChairsHolder } from "../../../store/object-holder";
import styles from "./PossiblesBox.module.css";

const PossiblesBox = () => {
  const { chairState, dispatch } = useContext(ChairsHolder);

  const possibles = chairState.possibles;

  const displayablePossibles = possibles.map((player) => (
    <PossiblePlayer2
      key={possibles.indexOf(player)}
      player={player}
    //   doubleClicked={doubleClickHandler}
    ></PossiblePlayer2>
  ));

  return <div>{displayablePossibles}</div>;
};

export default PossiblesBox;
