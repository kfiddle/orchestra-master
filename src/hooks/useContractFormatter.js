const useContractFormatter = (insts, rank) => {
  if (insts || rank) {
    let primaryInstName = insts[0].name;

    let part2 = insts[1] ? insts[1].abbreviation : '';

    if (primaryInstName === "violin1" && rank === 1) {
      return "CM";
    } else if (rank === 1) {
      return "Princ";
    } else if (part2 !== '') {
      return rank + " / " + part2;
    }
    return rank;
  }
};

export default useContractFormatter;
