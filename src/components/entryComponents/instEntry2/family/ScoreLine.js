export const extras = {
  FL: ["PIC", "AFL", "BFL", "FDA"],
  OB: ["EH", "ODA", "BOB"],
  CL: ["EB", "BCL", "SAX"],
  BSN: ["CBSN"],
  HN: ["WTBA"],
  TPT: ["CRT", "FGH", "PTPT"],
  TBN: ["BTRBN"],
  TBA: ["EUPH"],
};

export const primaries = Object.keys(extras);

export const strings = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];

const allInsts = [];
for (let key in extras) {
  allInsts.push(key);
  for (let value of extras[key]) {
    allInsts.push(value);
  }
}

export const isValidInst = (instName) => {
  return allInsts.includes(instName);
};

export const ScoreLine = (parts) => {
  return { parts };
};

export const Part = (instAbbrev, rankOrDesignate) => {
  let specialDesignate = isNaN(rankOrDesignate) ? rankOrDesignate : null;
  let rank;
  if (!isNaN(rankOrDesignate)) {
    rank = +rankOrDesignate;
  } else if (rankOrDesignate === "A") {
    rank = rankOrDesignate;
  } else {
    rank = null;
  }

  if (isValidInst(instAbbrev) && rankOrDesignate) {
    return {
      instrument: { abbreviation: instAbbrev },
      rank,
      specialDesignate,
    };
  } else {
    return null;
  }
};
