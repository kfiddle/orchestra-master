import PossiblePlayer2 from "./possiblePlayers/PossiblePlayer2";

import styles from "./Possibles.module.css";

const Possibles = (props) => {
  const possibles = props.possibles;

  console.log(possibles);

  const displayablePossibles = possibles.map((player) => (
    <PossiblePlayer2
      key={possibles.indexOf(player)}
      player={player}
      // clickedIndex={clickedIndex}
      // playerPlaced={playerPlaced}
    ></PossiblePlayer2>
  ));

  return <div className={styles.outerContainer}>{displayablePossibles}</div>;
};

export default Possibles;
