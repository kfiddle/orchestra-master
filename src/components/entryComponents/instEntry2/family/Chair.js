import { useState, useEffect } from "react";

export const extras = {
  FLUTE: ["PIC", "AFL", "BFL", "FDA"],
  OBOE: ["EH", "BOB", "ODA"],
  CLARINET: ["EB", "BCL", "SAX"],
  BASSOON: ["CBN"],
  HORN: ["WTBA"],
  TRUMPET: ["CRT", "FGH", "PIC"],
  TROMBONE: ["BASS"],
  TUBA: ["EUPH"],
};

export const primaries = Object.keys(extras);

const allInsts = [];
for (let key in extras) {
  allInsts.push(key);
  for (let value of extras[key]) {
    allInsts.push(value);
  }
}

const isValidInst = (instName) => {
  return allInsts.includes(instName);
};

export const Chair = (parts) => {
  const removeAPart = (index) => {
    parts.splice(index, 1);
  };

  return { parts, removeAPart };
};

export const Part = (instrument, rankOrDesignate) => {
  let specialDesignate = isNaN(rankOrDesignate) ? rankOrDesignate : null;
  let rank = !isNaN(rankOrDesignate) ? +rankOrDesignate : null;

  const changeInst = (instName) => {
    instrument = instName;
  };

  const changeRank = (newRank) => {
    rank = newRank;
  };
  if (isValidInst(instrument)) {
    return { instrument, rank, specialDesignate, changeInst, changeRank };
  } else {
    return null;
  }
};
