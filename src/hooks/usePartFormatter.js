const usePartFormatter = () => {
  const lowerCaser = (name) => {
    return name[0] + name.slice(1).toLowerCase();
  };

  return (part) => {
    let displayPart = "";

    if (part.instrument.name === "VIOLIN1" && part.rank === 1)
      displayPart = "Concertmaster";
    else if (part.specialDesignate === "a")
      displayPart = "Assistant " + lowerCaser(part.instrument.name);
    else if (part.instrument.name === "VIOLIN1") displayPart = "First Violin";
    else if (part.instrument.name === "VIOLIN2") displayPart = "Second Violin";
    else {
      displayPart = lowerCaser(part.instrument.name) + ` ${part.rank}`;
    }

    return displayPart;
  };
};

export default usePartFormatter;
