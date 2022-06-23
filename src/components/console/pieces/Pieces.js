import { useState, useContext, useEffect } from "react";

import ConsolePiece from "./piece/ConsolePiece";

import useFetch from "../../../hooks/useFetch";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Pieces.module.css";

const Pieces = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  useEffect(() => {
    const grabThePics = async () => {
      const piecePics = await pusher(
        dashboard.clickedPiece,
        "get-pics-in-show-piece"
      );
      dispatch({ type: "pics", list: piecePics });
    };

    if (dashboard.clickedPiece || dashboard.playerChanged) {
      grabThePics();
      dispatch({ type: "playerChanged", playerChanged: false });
    }

    if (dashboard.stringNumsSubmitted && dashboard.clickedPiece) {
      grabThePics();
      dispatch({ type: "stringNumsSubmitted", stringNumsSubmitted: false });
    }
  }, [
    dashboard.clickedPiece,
    dashboard.playerChanged,
    dashboard.stringNumsSubmitted,
  ]);

  const displayablePieces = dashboard.pieces.map((piece) => (
    <ConsolePiece key={piece.id} pp={piece} />
  ));
  return <div>{displayablePieces}</div>;
};

export default Pieces;
