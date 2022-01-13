import { useState, useEffect } from "react";

import PossiblePlayer from "./PossiblePlayer";

const PossiblePlayersDrop = (props) => {
  const players = props.players;

  const displayablePossibles = players.map(player => (
    <PossiblePlayer key={players.indexOf(player)} player={player}></PossiblePlayer>
  ))

  return <div>{displayablePossibles}</div>
};

export default PossiblePlayersDrop;
