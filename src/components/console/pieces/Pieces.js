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

  const partsEquals = (pic1, pic2) => {
    return (
      pic1.parts.length === pic2.parts.length &&
      pic1.parts.every(
        (part, index) => part.instrument.id === pic2.parts[index].instrument.id
      )
    );
  };

  const showFullRoster = async () => {
    const allPicsInShow = [];

    for (let showPiece of dashboard.pieces) {
      const pics = await pusher(showPiece, "get-pics-in-show-piece");
      // if (pics.length) {
      //   const fullShowRoster = pics.reduce(fullList, pic => {
      //     if (!fullList.includes())
      //   }, [])
      // }

      // if (pics.length) {
      const nonDupedPics = pics.filter((pic1) => {
        pics.forEach((pic2) => partsEquals(pic1, pic2));
      });
      // }
      console.log(nonDupedPics);

      // if (pics.length) console.log(partsEquals(pics[0], pics[1]));
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
