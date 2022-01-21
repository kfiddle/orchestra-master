import PossiblePlayer from "../piece/PossiblePlayer";

import styles from "./Possibles.module.css";

const Possibles = (props) => {
  const possibles = props.possibles;

  const displayablePossibles = possibles.map((player) => (
    <PossiblePlayer
      key={possibles.indexOf(player)}
      player={player}
      // clickedIndex={clickedIndex}
      // playerPlaced={playerPlaced}
    ></PossiblePlayer>
  ));

  return <div className={styles.outerContainer}>{displayablePossibles}</div>;
};

export default Possibles;
