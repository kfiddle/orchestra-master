import ConsolePiece from "../components/masterConsole/performances/consolePiece/ConsolePiece";

const useMakePieces = (pieces, clickedPieceHandler) => {
  if (!pieces) {
    return [];
  } else {
    let listToReturn = pieces.map((piece) => (
      <ConsolePiece
        key={piece.id}
        pp={piece}
        clicked={clickedPieceHandler}
        //   playerPlaced={playerPlaced}
        //   activePiece={clickedPiece === piece ? true : false}
      />
    ));
    return listToReturn;
  }
};

export default useMakePieces;
