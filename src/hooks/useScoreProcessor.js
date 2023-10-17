import useFullOrch from './useFullOrch';

const useScoreProcessor = () => {
  const fullOrch = useFullOrch();
  const extras = {};
  for (let [primary, dbs] of Object.entries(fullOrch)) {
    extras[primary] = dbs.map((inst) => inst.abbreviation);
  }

  const primaries = Object.keys(extras);

  const allInsts = [];
  for (let [key, list] of Object.entries(extras)) {
    allInsts.push(key);
    for (let inst of list) {
      allInsts.push(inst);
    }
  }

  const isValidInst = (instName) => {
    return allInsts.includes(instName);
  };

  const Part = (instAbbrev, rankOrDesignate) => {
    let specialDesignate = isNaN(rankOrDesignate) ? rankOrDesignate : null;
    let rank;
    if (!isNaN(rankOrDesignate)) {
      rank = +rankOrDesignate;
    } else if (rankOrDesignate === 'A') {
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

  const process = (text) => {
    let isValid = true;
    let scoreLinesList = [];

    console.log(fullOrch);

    const renderScoreLine = (inst, rank) => {
      let parts = [];
      let part = Part(inst, rank);
      part ? parts.push(part) : (isValid = false);
      scoreLinesList.push({ parts });
    };

    // 4[1.2.3/pic.4/pic] 4[1.2.3.Eh] 4[1.2.3.bcl] 4 — 6431

    const renderDoublings = (inst, scoreLine) => {
      let partsToAdd = [];
      !isNaN(scoreLine[0]) ? partsToAdd.push(Part(inst, scoreLine[0])) : (isValid = false);
      const partsString = scoreLine.split('/');
      const endsWithDigit = /\w\d$/;

      for (let part of partsString.slice(1)) {
        if (endsWithDigit.exec(part)) {
          const inst = part.slice(0, -1);
          const rank = part.slice(-1);
          partsToAdd.push(Part(inst, rank));
        } else {
          partsToAdd.push(Part(part, 1));
        }
      }

      scoreLinesList.push({ parts: partsToAdd });
    };

    // 3[1.2.3/pic1.pic2] 2 3[1.2.Bcl] 2 – 4a221
    //      1.2.3/pic.4/pic
    const goBetweenBrackets = (j, index) => {
      let primaryInst = primaries[index];
      if (primaryInst === undefined) {
        isValid = false;
        return;
      }
      let bracketSlice = text.slice(j + 1);
      let closingIndex = bracketSlice.indexOf(']');
      if (closingIndex === -1) {
        isValid = false;
        return;
      }
      let withinBracketsScoreLines = bracketSlice.slice(1, closingIndex).split('.');

      withinBracketsScoreLines.forEach((scoreLine) => {
        if (!isNaN(scoreLine)) {
          renderScoreLine(primaryInst, scoreLine);
        } else if (extras[primaryInst].includes(scoreLine)) {
          renderScoreLine(scoreLine, 1);
        } else if (extras[primaryInst].includes(scoreLine.slice(0, -1))) {
          const inst = scoreLine.slice(0, -1);
          const rank = scoreLine.slice(-1);
          renderScoreLine(inst, rank);
        } else {
          renderDoublings(primaryInst, scoreLine);
        }
      });
      return closingIndex + j;
    };

    // 3[1.2.3/pic1.pic2] 2 3[1.2.Bcl] 2 – 4a221
    // 4[1.2.3/pic.4/pic] 4[1.2.3.Eh] 4[1.2.3.bcl] 4 — 6431
    //2222 - 3333

    // 2  2  2  2 — 2  2  0  0 — tmp — str
    // 3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] — 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str
    // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str
    // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str
    // 3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str
    // 3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str
    // 3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str
    // 3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str
    // 3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str

    const mainLoop = () => {
      let times = 0;
      for (let j = 0; j < text.length; j++) {
        let nextChar = text[j + 1];
        if (nextChar === '[') {
          j = goBetweenBrackets(j, times);
        } else if (nextChar === 'A') {
          for (let k = 1; k <= text[j]; k++) {
            renderScoreLine(primaries[times], k);
          }
          renderScoreLine(primaries[times], 'a');
          j++;
          times++;
        } else {
          for (let k = 1; k <= text[j]; k++) {
            renderScoreLine(primaries[times], k);
          }
          times++;
        }
      }
    };

    const finalCheckValid = () => {
      for (let scoreLine of scoreLinesList) {
        for (let part of scoreLine.parts) {
          if (part == null) {
            isValid = false;
          }
        }
      }
    };

    mainLoop();
    finalCheckValid();
    return isValid ? scoreLinesList : false;
  };

  return process;
};

export default useScoreProcessor;
