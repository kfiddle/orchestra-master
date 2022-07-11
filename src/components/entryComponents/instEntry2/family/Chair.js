export const extras = {
  FL: ["PIC", "AFL", "BFL", "FDA"],
  OB: ["EH", "BOB", "ODA"],
  CL: ["EB", "BCL", "SAX"],
  BSN: ["CBN"],
  HN: ["WTBA"],
  TPT: ["CRT", "FGH", "PTPT"],
  TBN: ["BASS"],
  TBA: ["EUPH"],
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
  return { parts };
};

export const Part = (instAbbrev, rankOrDesignate) => {
  let specialDesignate = isNaN(rankOrDesignate) ? rankOrDesignate : null;
  let rank = !isNaN(rankOrDesignate) ? +rankOrDesignate : null;

  if (isValidInst(instAbbrev)) {
    return { instrument: { abbreviation: instAbbrev }, rank, specialDesignate };
  } else {
    return null;
  }
};
