import { useState, useContext } from "react";

import ConsolePiece from "./piece/ConsolePiece";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Pieces.module.css";
import { useEffect } from "react/cjs/react.production.min";

const Pieces = (props) => {
  //   const [clickedPiece, setClickedPiece] = useState({});
  const { dashboard, dispatch } = useContext(ConsoleHolder);

//   const clickedPieceHandler = (piece) => {
  
//   };

  const displayablePieces = dashboard.pieces.map((piece) => (
    <ConsolePiece
      key={piece.id}
      pp={piece}
    //   clicked={clickedPieceHandler}
    //   activePiece={clickedPiece === piece ? true : false}
    />
  ));
  return <div>{displayablePieces}</div>;
};

export default Pieces;
