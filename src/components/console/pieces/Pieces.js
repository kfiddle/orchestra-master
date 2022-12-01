import React, { useState, useContext, useEffect } from "react";

import ConsolePiece from "./piece/ConsolePiece";

import useFetch from "../../../hooks/useFetch";

import { ConsoleHolder } from "../../../store/object-holder";

import styles from "./Pieces.module.css";

const Pieces = (props) => {
  const { dashboard, dispatch } = useContext(ConsoleHolder);

  const pusher = useFetch();

  const grabThePics = async () => {
    const piecePics = await pusher(
      dashboard.clickedPiece,
      "get-pics-in-show-piece"
    );
    dispatch({ type: "pics", list: piecePics });
  };

  const showFullRoster = async () => {
    const allPicsInShow = [];

    for (let showPiece of dashboard.pieces) {
      const pics = await pusher(showPiece, "get-pics-in-show-piece");
      if (pics) {
        for (let pic of pics) allPicsInShow.push(pic);
      }
    }
  };

  useEffect(() => {
    if (
      dashboard.clickedPiece ||
      (dashboard.refreshPICS && dashboard.clickedPiece)
    ) {
      grabThePics();
      dispatch({ type: "refreshPICS", refreshPICS: false });
    }

    if (dashboard.refreshPICS && dashboard.clickedPiece) {
      grabThePics();
      dispatch({ type: "refreshPICS", refreshPICS: false });
    }
  }, [dashboard.clickedPiece, dashboard.refreshPICS]);

  const displayablePieces = dashboard.pieces.map((piece) => (
    <ConsolePiece key={piece.id} pp={piece} />
  ));
  return (
    <div>
      {displayablePieces}
      <button style={{ marginLeft: "2rem" }} onClick={showFullRoster}>
        Get Full Roster
      </button>
    </div>
  );
};

export default Pieces;
