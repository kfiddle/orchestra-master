import { Part, ScoreLine, extras, primaries, isValidInst } from "./ScoreLine";

const FamilyScoreLinesProcessor = (text) => {
  let isValid = true;
  let scoreLinesList = [];

  const renderScoreLine = (inst, rank) => {
    let parts = [];
    let part = Part(inst, rank);
    parts.push(part);
    let scoreLine = ScoreLine(parts);
    scoreLinesList.push(scoreLine);
  };

  const renderDoublings = (inst, scoreLine) => {
    let partsToAdd = [];
    !isNaN(scoreLine[0])
      ? partsToAdd.push(Part(inst, scoreLine[0]))
      : (isValid = false);
    const partsString = scoreLine.split("/");
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

    scoreLinesList.push(ScoreLine(partsToAdd));
  };

  const goBetweenBrackets = (j, index) => {
    let primaryInst = primaries[index];
    let bracketSlice = text.slice(j + 1);
    let closingIndex = bracketSlice.indexOf("]");
    let withinBracketsScoreLines = bracketSlice
      .slice(1, closingIndex)
      .split(".");
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

  const mainLoop = () => {
    let times = 0;
    for (let j = 0; j < text.length; j++) {
      let nextChar = text[j + 1];
      if (nextChar === "[") {
        j = goBetweenBrackets(j, times);
      } else if (nextChar === "A") {
        for (let k = 1; k <= text[j]; k++) {
          renderScoreLine(primaries[times], k);
        }
        renderScoreLine(primaries[times], "a");
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

export default FamilyScoreLinesProcessor;
