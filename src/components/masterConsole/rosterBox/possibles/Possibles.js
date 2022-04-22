import { useContext } from "react";

import PossiblePlayer2 from "./possiblePlayer/PossiblePlayer2";

import { RosterBoxHolder } from "../../../../store/object-holder";

import styles from "./Possibles.module.css";

const Possibles = (props) => {
  const doubleClicked = props.doubleClicked;
  const { listOfPossibles, doubleClickedPossible } =
    useContext(RosterBoxHolder);

  const nameMatches = props.nameMatches;

  const doubleClickHandler = (player) => {
    doubleClicked(player);
  };

  const classNames = nameMatches? styles.fromNames : styles.noNames;

  const namesToMap = nameMatches ? nameMatches : listOfPossibles;

  const displayablePossibles = namesToMap.map((player) => (
    <PossiblePlayer2
      key={namesToMap.indexOf(player)}
      player={player}
      doubleClicked={doubleClickHandler}
    ></PossiblePlayer2>
  ));

  return <div className={classNames}>{displayablePossibles}</div>;
};

export default Possibles;
