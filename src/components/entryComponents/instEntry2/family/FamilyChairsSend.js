import { Part, Chair, extras, primaries } from "./Chair";

const FamilyChairsSend = (text) => {
  let tempList = [];

  const renderChair = (inst, rank) => {
    let parts = [];
    let part = Part(inst, rank);
    parts.push(part);
    let chair = Chair(parts);
    tempList.push(chair);
  };

  const renderDoublings = (inst, chair) => {
    let partsToAdd = [];
    partsToAdd.push(Part(inst, chair[0]));
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

    tempList.push(Chair(partsToAdd));
  };

  const goBetweenBrackets = (j, index) => {
    let primaryInst = primaries[index];
    let closingIndex = text.indexOf("]");
    let withinBracketsChairs = text.slice(j + 2, closingIndex).split(".");
    withinBracketsChairs.forEach((chair) => {
      if (!isNaN(chair)) {
        renderChair(primaryInst, chair);
      } else if (extras[primaryInst].includes(chair)) {
        renderChair(primaryInst, 1);
      } else {
        renderDoublings(primaryInst, chair);
      }
    });
    return closingIndex;
  };

  const mainLoop = () => {
    let times = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[j + 1] === "[") {
        j = goBetweenBrackets(j, times);
      } else {
        for (let k = 1; k <= text[j]; k++) {
          renderChair(primaries[times], k);
        }
        times++;
      }
    }
  };

  mainLoop();
  console.log(tempList);
};

export default FamilyChairsSend;
