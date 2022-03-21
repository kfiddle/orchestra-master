const PieceListHelper = (piece, currentPieces, setPieceListFunction) => {
  let tempList = currentPieces;

  tempList = tempList.filter((listedPiece) => listedPiece.id !== piece.id);


  if (tempList.length === currentPieces.length) {
    setPieceListFunction((previous) => [...previous, piece]);
  } else {
    setPieceListFunction(tempList);
  }
};

export default PieceListHelper;
