const useContractFormatter = (contractObject) => {
  let { part, rank, part2 } = contractObject;

  let abbreviatedPart = "";

  if (part2 === "EbClarinet") {
    abbreviatedPart = "Eb";
  } else if (part2 === "BassClarinet") {
    abbreviatedPart = "bcl";
  } else if (part2 === "EnglishHorn") {
    abbreviatedPart = "eh";
  } else if (part2 === "BassTrombone") {
    abbreviatedPart = "Bass";
  } else if (part2 === "Piccolo") {
    abbreviatedPart = "pic";
  }

  if (part === "Violin1" && rank === 1) {
    return "CM";
  } else if (rank === 1) {
    return "Princ";
  } else if (part2 !== null) {
    return rank + " / " + abbreviatedPart;
  }
  return rank;
};

export default useContractFormatter;
