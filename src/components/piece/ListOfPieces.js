import { useState } from "react";
import LibraryPiece from "./LibraryPiece";

import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  const displayablePieces = props.list.map((piece) => (
    <LibraryPiece title={piece.title} />
  ));

  return <div>{displayablePieces}</div>;
};

export default ListOfPieces;
