import { useState, useEffect } from "react";

export const Chair = (parts) => {
  const removeAPart = (index) => {
    parts.splice(index, 1);
  };

  return { parts, removeAPart };
};

export const Part = (instrument, rank) => {
  const changeInst = (instName) => {
    instrument = instName;
  };

  const changeRank = (newRank) => {
    rank = newRank;
  };
  return { instrument, rank, changeInst, changeRank };
};
