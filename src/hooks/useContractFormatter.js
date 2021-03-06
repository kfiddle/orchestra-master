const useContractFormatter = (instruments, rank) => {
  if (instruments || rank) {
    let part = instruments[0].name;

    let part2 = null;

    if (instruments[1] != null) {
      part2 = instruments[1].name;
    }

    let abbreviatedPart = "";

    if (part2 === "EB CLARINET") {
      abbreviatedPart = "Eb";
    } else if (part2 === "BASS CLARINET") {
      abbreviatedPart = "bcl";
    } else if (part2 === "ENGLISH HORN") {
      abbreviatedPart = "eh";
    } else if (part2 === "BASS TROMBONE") {
      abbreviatedPart = "Bass";
    } else if (part2 === "PICCOLO") {
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
