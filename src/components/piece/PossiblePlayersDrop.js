import { useState, useEffect } from "react";

import PossiblePlayer from "./PossiblePlayer";

import styles from './PossiblePlayersDrop.module.css'

const PossiblePlayersDrop = (props) => {
  const players = props.players;
  const pp = props.pp;
  const clickedIndex = props.clickedIndex;

  const playerPlaced = () => {
    props.playerPlaced(true)
  }

  const displayablePossibles = players.map(player => (
    <PossiblePlayer key={players.indexOf(player)} player={player} pp={pp} clickedIndex={clickedIndex} playerPlaced={playerPlaced}></PossiblePlayer>
  ))

  return <div className={styles.outerContainer}>{displayablePossibles}</div>
};

export default PossiblePlayersDrop;
