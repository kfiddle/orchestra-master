import { useState, useContext, useEffect } from "react";

import ConsolePiece from "./piece/ConsolePiece";

import PushBasic from "../../helperFunctions/pushFunctions/PushBasic";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Pieces.module.css";

const Pieces = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  useEffect(() => {
    const grabThePics = async () => {
      const piecePics = await PushBasic(
        dashboard.clickedPiece,
        "get-pics-in-show-piece"
      );
      const jsonified = await piecePics.json();
      dispatch({ type: "pics", list: jsonified });
    };

    if (dashboard.clickedPiece) {
        grabThePics();
    }
  }, [dashboard.clickedPiece]);

  const displayablePieces = dashboard.pieces.map((piece) => (
    <ConsolePiece key={piece.id} pp={piece} />
  ));
  return <div>{displayablePieces}</div>;
};

export default Pieces;
