const usePartFormatter = () => {
  const lowerCaser = (name) => {
    return name[0] + name.slice(1).toLowerCase();
  };

  const strings = ["VIOLIN1", "VIOLIN2", "VIOLA", "CELLO", "BASS"];

  return (part) => {
    const isString = strings.includes(part.instrument.name);
    let adjustedName = lowerCaser(part.instrument.name);
    if (adjustedName === "Violin1") adjustedName = "First Violin";
    if (adjustedName === "Violin2") adjustedName = "Second Violin";

    let displayPart = "";

    if (adjustedName === "First Violin" && part.rank === 1)
      displayPart = "Concertmaster";
    else if (part.rank === 1) displayPart = "Principal " + adjustedName;
    else if (part.specialDesignate === "a")
      displayPart = "Assistant " + adjustedName;
    else if (isString && part.rank === 2)
      displayPart = "Assistant Principal " + adjustedName;
    else if (isString && part.rank > 2) displayPart = "Section " + adjustedName;
    else {
      displayPart = adjustedName + ` ${part.rank}`;
    }

    return displayPart;
  };
};

export default usePartFormatter;
