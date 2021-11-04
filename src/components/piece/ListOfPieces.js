import { useState } from "react";
import LibraryPiece from "./LibraryPiece";

import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  const displayablePieces = props.list.map((piece) => (
    <LibraryPiece key={piece.id} piece={piece} />
  ));

  return <div className={classes.outerContainer}>{displayablePieces}</div>;
};

export default ListOfPieces;
