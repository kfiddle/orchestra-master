import { Fragment, useState, useEffect, useContext } from "react";
import LibraryPiece from "./LibraryPiece";
import LibrarySortHeader from "./librarySortHeader/LibrarySortHeader";

import ReloadFlagStore from "../../../store/reload-flag-store";

import useGetAList2 from '../../../hooks/useGetAList2';
import useGetAList3 from "../../../hooks/useGetAList3";

import classes from "./ListOfPieces.module.css";

const ListOfPieces = (props) => {
  const [sortOption, setSortOption] = useState("title");
  const { reloadFlag, setReloadFlag } = useContext(ReloadFlagStore);

  let pieces = useGetAList2(
    "get-sorted-pieces/" + sortOption,
    reloadFlag,
    setReloadFlag
  );

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

  const [allPICS, setReload] = useGetAList3("get-all-new-pics");

  const picTest = () => {
    setReload(true);
    console.log(allPICS);
  };

  return (
    <Fragment>
      <LibrarySortHeader sorter={sorter} />
      <div className={classes.outerContainer}>
        {displayablePieces}
        <button onClick={picTest}>TestMe</button>
      </div>
    </Fragment>
  );
};

export default ListOfPieces;
