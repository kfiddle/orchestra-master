const DoublingExtras = () => {
  const doubling = {
    FLUTE: ["PICCOLO", "ALTOFLUTE"],
    OBOE: ["ENGLISHHORN", "BSOBOE"],
    CLARINET: ["EBCLARINET", "BASSCLARINET"],
    BASSOON: ["CONTRA"],
    HORN: [""],
    TRUMPET: ["CORNET", "FUGALHORN"],
    TROMBONE: ["EUPHONIUM"],
    TUBA: ["EUPHONIUM"],
  };

  const extras = {
    FLUTE: ["PICCOLO", "ALTOFLUTE"],
    OBOE: ["ENGLISHHORN", "D'AMORE", "BSOBOE"],
    CLARINET: ["EBCLARINET", "BASSCLARINET", "SAX"],
    BASSOON: ["CONTRA"],
    HORN: ["WAGNERTUBA"],
    TRUMPET: ["CORNET", "FUGALHORN", "PICCTRUMPET"],
    TROMBONE:['BASSTROMBONE'],
    TUBA: ["EUPHONIUM"],
    PERCUSSION: [
      "HARP",
      "PIANO",
      "KEYBOARD",
      "CELESTE",
      "GLOCKENSPIEL",
      "ORGAN",
      "SAX",
    ],
  };



  return { doubling, extras };
};

export default DoublingExtras;



