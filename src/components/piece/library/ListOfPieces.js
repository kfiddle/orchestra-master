import { Fragment, useState, useEffect, useContext } from "react";
import LibraryPiece from "./LibraryPiece";
import LibrarySortHeader from "./librarySortHeader/LibrarySortHeader";

import ReloadFlagStore from "../../../store/reload-flag-store";

import useGetAList2 from "../../../hooks/useGetAList2";

import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  // const [pieces, setPieces] = useState([]);
  const [sortOption, setSortOption] = useState("title");

  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);

  // const reloadFlag = props.reloadFlag;
  // const setReloadFlag = props.setReloadFlag;

  let pieces = useGetAList2("get-sorted-pieces/" + sortOption, reloadFlag, setReloadFlag);

  // useEffect(() => {
  //   const getAllPieces = async () => {
  //     const allPieces = await GetAList("get-sorted-pieces/" + sortOption);
  //     setPieces(allPieces);
  //   };

  //   if (reloadFlag) {
  //     getAllPieces();
  //     setReloadFlag(false);
  //   }

  //   getAllPieces();
  // }, [props.modalIsClosed, sortOption, reloadFlag]);

  const displayablePieces = pieces.map((piece) => (
    <LibraryPiece key={piece.id} piece={piece} closeModal={props.closeModal} />
  ));

  const sorter = (sortOption) => {
    if (sortOption === "Composer") {
      setSortOption("composerName");
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
