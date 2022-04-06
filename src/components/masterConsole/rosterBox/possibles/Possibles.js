import PossiblePlayer2 from "./possiblePlayer/PossiblePlayer2";

import styles from "./Possibles.module.css";

const Possibles = (props) => {
  const possibles = props.possibles;
  const doubleClicked = props.doubleClicked;

  const doubleClickHandler = (player) => {
    doubleClicked(player);
  };

  const displayablePossibles = possibles.map((player) => (
    <PossiblePlayer2
      key={possibles.indexOf(player)}
      player={player}
      doubleClicked={doubleClickHandler}
    ></PossiblePlayer2>
  ));

  return <div className={styles.outerContainer}>{displayablePossibles}</div>;
};

export default Possibles;
