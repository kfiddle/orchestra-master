import { useState, useEffect } from "react";

import ListOfPieces from "../components/piece/library/ListOfPieces";

import GetAList from "../components/helperFunctions/GetAList";

const Library = (props) => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const getAllPieces = async () => {
      const allPieces = await GetAList("get-all-pieces");
      setPieces(allPieces);
    };

    if (props.modalIsClosed) {
      getAllPieces();
    }

    getAllPieces();
  }, [props.modalIsClosed]);

  return <ListOfPieces list={pieces} />;
};

export default Library;
