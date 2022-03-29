const DoublingExtras = () => {
  const doubling = {
    FLUTE: ["PICCOLO", "ALTOFLUTE"],
    OBOE: ["ENGLISHHORN"],
    CLARINET: ["EBCLARINET", "BASSCLARINET"],
    BASSOON: ["CONTRA"],
    HORN: [""],
    TRUMPET: ["CORNET", "FUGALHORN"],
    TROMBONE: ["EUPHONIUM"],
    TUBA: ["EUPHONIUM"],
  };

  const extras = {
    FLUTE: ["PICCOLO", "ALTOFLUTE"],
    OBOE: ["ENGLISHHORN", "D'AMORE"],
    CLARINET: ["EBCLARINET", "BASSCLARINET", "SAX"],
    HORN: ["WAGNERTUBA"],
    TRUMPET: ["CORNET", "FUGALHORN"],
    TUBA: ["EUPHONIUM"],
    PERCUSSION: [
      "HARP",
      "PIANO",
      "KEYBOARD",
      "CELESTE",
      "GLOCKENSPIEL",
      "ORGAN",
    ],
  };

  return { doubling, extras };
};

export default DoublingExtras;
