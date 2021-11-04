import { Fragment, useState } from "react";
import LibraryPiece from "./LibraryPiece";
import LibrarySortHeader from "./librarySortHeader/LibrarySortHeader";

import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  const displayablePieces = props.list.map((piece) => (
    <LibraryPiece key={piece.id} piece={piece} />
  ));

  return (
    <Fragment>
      <LibrarySortHeader />

      <div className={classes.outerContainer}>{displayablePieces}</div>
    </Fragment>
  );
};

export default ListOfPieces;
