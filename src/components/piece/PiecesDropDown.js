import { useState, useEffect } from "react";

import PieceListItem from "./PieceListItem";

import GetAList from "../helperFunctions/GetAList";


import styles from "./PiecesDropDown.module.css";

const PiecesDropDown = (props) => {
  const [piecesList, setPiecesList] = useState([]);

  useEffect(() => {
    const getPieces = async () => {
      const allPiecesResponse = await GetAList("get-all-pieces");
      setPiecesList(allPiecesResponse);
    };

    getPieces();
  }, []);

  const listToDisplay = piecesList.map((piece) => (
    <PieceListItem key={piece.id} piece={piece}></PieceListItem>
  ));

  return (
    <div className={styles.outerContainer}>
      <ul>{listToDisplay}</ul>
    </div>
  );
};

export default PiecesDropDown;
