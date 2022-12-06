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

  const partsContains = (picList, parts) => {
    for (let pic of picList) {
      if (
        pic.parts.length === parts.length &&
        pic.parts.every((part, index) => {
          return (
            part.instrument.id === parts[index].instrument.id &&
            part.rank === parts[index].rank
          );
        })
      ) {
        return true;
      }
    }
    return false;
  };

  const showFullRoster = async () => {
    const allPicsInShow = [];
    let nonDuped = [];

    // const fullRoster = await pusher(dashboard.pieces, "get-full-roster");
    // if (fullRoster.length) dispatch({ type: "pics", list: fullRoster });

    for (let showPiece of dashboard.pieces) {
      const pics = await pusher(showPiece, "get-pics-in-show-piece");

      if (pics.length) {
        for (let pic of pics) {
          if (!partsContains(nonDuped, pic.parts)) nonDuped.push(pic);
        }
      }
    }

    const sortedPics = await pusher(nonDuped, "sort-pics");
    if (sortedPics.length) dispatch({ type: "pics", list: sortedPics });
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

      {displayablePieces.length > 1 && (
        <button className={styles.button} onClick={showFullRoster}>
          Get Full Roster
        </button>
      )}
    </div>
  );
};

export default Pieces;
