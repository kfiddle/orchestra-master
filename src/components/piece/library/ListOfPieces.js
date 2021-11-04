import { Fragment, useState, useEffect } from "react";
import LibraryPiece from "./LibraryPiece";
import LibrarySortHeader from "./librarySortHeader/LibrarySortHeader";

import GetAList from "../../helperFunctions/GetAList";

import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  const [pieces, setPieces] = useState([]);
  const [sortOption, setSortOption] = useState("title");

  useEffect(() => {
    const getAllPieces = async () => {
      const allPieces = await GetAList("get-sorted-pieces/" + sortOption);
      setPieces(allPieces);
    };

    if (props.modalIsClosed) {
      getAllPieces();
    }

    getAllPieces();
  }, [props.modalIsClosed, sortOption]);

  const displayablePieces = pieces.map((piece) => (
    <LibraryPiece key={piece.id} piece={piece} />
  ));

  const sorter = (sortOption) => {
    if (sortOption === "Composer") {
      setSortOption("composerLastName");
    } else if (sortOption === "Library Catalog") {
      setSortOption("libNumber");
    } else if (sortOption === "Arranger") {
      setSortOption("arranger");
    } else if (sortOption === "Publisher") {
      setSortOption("publisher");
    } else if (sortOption === "Title") {
      setSortOption("title");
    } else {
      setSortOption(sortOption);
    }
  };

  return (
    <Fragment>
      <LibrarySortHeader sorter={sorter} />
      <div className={classes.outerContainer}>{displayablePieces}</div>
    </Fragment>
  );
};

export default ListOfPieces;
