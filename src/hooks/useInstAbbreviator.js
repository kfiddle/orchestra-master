const useInstAbbreviator = (instName) => {
  if (instName) {
    switch (instName) {
      case "ENGLISH HORN":
        return "eh";
      case "BASS OBOE":
        return "bsOboe";
      case "EB CLARINET":
        return "Eb";
      case "BASS CLARINET":
        return "bcl";
      case "BASS TROMBONE":
        return "bass";
      case "PICCOLO":
        return "pic";
      case "PICC TRUMPET":
        return "pic";
      case "ALTO FLUTE":
        return "altFL";
      default:
        return instName;
    }
  }

  return null;
};

export default useInstAbbreviator;

// FLUTE: ["PICCOLO", "ALTO FLUTE"],
// OBOE: ["ENGLISH HORN", "BASS OBOE", "D'AMORE"],
// CLARINET: ["EB CLARINET", "BASS CLARINET", "SAX"],
// BASSOON: ["CONTRA"],
// HORN: ["WAGNERTUBA"],
// TRUMPET: ["CORNET", "FUGALHORN", "PICC TRUMPET"],
// TROMBONE: ["BASS TROMBONE"],
// TUBA: ["EUPHONIUM"],
// PERCUSSION: [
