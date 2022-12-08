import { Fragment, useState, useEffect, useContext } from "react";
import LibraryPiece from "./LibraryPiece";
import LibrarySortHeader from "./librarySortHeader/LibrarySortHeader";

import ReloadFlagStore from "../../../store/reload-flag-store";

import useGetAList2 from "../../../hooks/useGetAList2";
import useGetAList3 from "../../../hooks/useGetAList3";

import classes from "./ListOfPieces.module.css";

const sortConverts = {
  Composer: "composerName",
  Title: "title",
  Arranger: "arranger",
  Publisher: "publisher",
  ["Library Catalog"]: "libNumber",
};

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
    setSortOption(sortConverts[sortOption]);
  };

  return (
    <Fragment>
      <LibrarySortHeader sorter={sorter} options={Object.keys(sortConverts)}/>
      <div className={classes.outerContainer}>{displayablePieces}</div>
    </Fragment>
  );
};

export default ListOfPieces;
