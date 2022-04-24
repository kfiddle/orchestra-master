import { useState, useContext, useEffect } from "react";

import ConsolePiece from "./piece/ConsolePiece";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Pieces.module.css";

const Pieces = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const displayablePieces = dashboard.pieces.map((piece) => (
    <ConsolePiece key={piece.id} pp={piece} />
  ));
  return <div>{displayablePieces}</div>;
};

export default Pieces;
