import { useState, useEffect } from "react";

import PieceItemEdit from "./pieceItemEdit/PieceItemEdit";

import GetAList from "../../../../helperFunctions/GetAList";

import styles from "./PiecesDropDownEdit.module.css";

const PiecesDropDownEdit = (props) => {
  const [piecesList, setPiecesList] = useState([]);
  const showOrHide = props.showOrHide;

  useEffect(() => {
    const getPieces = async () => {
      const allPiecesResponse = await GetAList("get-all-pieces");
      setPiecesList(allPiecesResponse);
    };

    getPieces();
  }, []);


  const listToDisplay = piecesList.map((piece) => (
    <PieceItemEdit key={piece.id} piece={piece} />
  ));

  const displayStyleObject = !showOrHide? {display: 'none'} : {};

  return (
    <div className={styles.outerContainer} style={displayStyleObject}>
      <ul>{listToDisplay}</ul>
    </div>
  );
};

export default PiecesDropDownEdit;