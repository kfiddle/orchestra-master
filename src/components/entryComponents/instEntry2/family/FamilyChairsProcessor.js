import { Part, Chair, extras, primaries } from "./Chair";

const FamilyChairsProcessor = (text) => {
  let isValid = true;
  let chairsList = [];

  const renderChair = (inst, rank) => {
    let parts = [];
    let part = Part(inst, rank);
    parts.push(part);
    let chair = Chair(parts);
    chairsList.push(chair);
  };

  const renderDoublings = (inst, chair) => {
    let partsToAdd = [];
    !isNaN(chair[0]) ? partsToAdd.push(Part(inst, chair[0])) : isValid = false;
    const partsString = chair.split("/");
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

    chairsList.push(Chair(partsToAdd));
  };

  const goBetweenBrackets = (j, index) => {
    let primaryInst = primaries[index];
    let bracketSlice = text.slice(j + 1);
    let closingIndex = bracketSlice.indexOf("]");
    let withinBracketsChairs = bracketSlice.slice(1, closingIndex).split(".");
    withinBracketsChairs.forEach((chair) => {
      if (!isNaN(chair)) {
        renderChair(primaryInst, chair);
      } else if (extras[primaryInst].includes(chair)) {
        renderChair(chair, 1);
      } else if (extras[primaryInst].includes(chair.slice(0, -1))) {
        const inst = chair.slice(0, -1);
        const rank = chair.slice(-1);
        renderChair(inst, rank);
      } else {
        renderDoublings(primaryInst, chair);
      }
    });
    return closingIndex + j;
  };

  // 3[1.2.pic] 2 3[1.2.Bcl] 2 – 4a221

  const mainLoop = () => {
    let times = 0;
    for (let j = 0; j < text.length; j++) {
      let nextChar = text[j + 1];
      if (nextChar === "[") {
        j = goBetweenBrackets(j, times);
      } else if (nextChar === "A") {
        for (let k = 1; k <= text[j]; k++) {
          renderChair(primaries[times], k);
        }
        renderChair(primaries[times], "a");
        j++;
        times++;
      } else {
        for (let k = 1; k <= text[j]; k++) {
          renderChair(primaries[times], k);
        }
        times++;
      }
    }
  };

  mainLoop();
  return isValid ? chairsList : false;
};

export default FamilyChairsProcessor;
