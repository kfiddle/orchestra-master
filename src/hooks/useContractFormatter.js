const useContractFormatter = (parts, rank) => {
  if (parts || rank) {

    let part = parts[0];
    
    let part2 = null;

    if (parts[1] != null) {
      part2 = parts[1]
    }


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
  }
};

export default useContractFormatter;
