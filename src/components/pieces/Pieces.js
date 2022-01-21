import { useState } from "react";

import styles from "./Pieces.module.css";

import ConsolePiece from "../masterConsole/performances/consolePiece/ConsolePiece";

const Pieces = (props) => {
  const [clickedPiece, setClickedPiece] = useState({});

  const pieces = props.pieces;
  const clicked = props.clicked;

  const clickedPieceHandler = (piece) => {
    setClickedPiece(piece);
    clicked(piece);
  };

  const displayablePieces = pieces.map((piece) => (
    <ConsolePiece
      key={piece.id}
      pp={piece}
      clicked={clickedPieceHandler}
      //   playerPlaced={playerPlaced}
      activePiece={clickedPiece === piece ? true : false}
    />
  ));

  return <div>{displayablePieces}</div>;
};

export default Pieces;
