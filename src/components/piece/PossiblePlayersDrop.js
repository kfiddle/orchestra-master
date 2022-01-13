import { useState, useEffect } from "react";

import PossiblePlayer from "./PossiblePlayer";

import styles from './PossiblePlayersDrop.module.css'

const PossiblePlayersDrop = (props) => {
  const players = props.players;

  const displayablePossibles = players.map(player => (
    <PossiblePlayer key={players.indexOf(player)} player={player}></PossiblePlayer>
  ))

  return <div className={styles.outerContainer}>{displayablePossibles}</div>
};

export default PossiblePlayersDrop;
