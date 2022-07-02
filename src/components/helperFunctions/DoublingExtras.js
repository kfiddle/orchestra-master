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
    TROMBONE: ["BASSTROMBONE"],
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

  const doublingAndExtras = {
    FLUTE: ["PICCOLO", "ALTO FLUTE"],
    OBOE: ["ENGLISH HORN", "BASS OBOE", "D'AMORE"],
    CLARINET: ["EB CLARINET", "BASS CLARINET", "SAX"],
    BASSOON: ["CONTRA"],
    HORN: ["WAGNERTUBA"],
    TRUMPET: ["CORNET", "FUGALHORN", "PICC TRUMPET"],
    TROMBONE: ["BASS TROMBONE"],
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

  const auxiliaries = [
    "HARP",
    "PIANO",
    "CELESTE",
    "GLOCKENSPIEL",
    "ORGAN",
    "SAX",
    "DRUMSET",
  ];

  return { doubling, extras, doublingAndExtras, auxiliaries };
};

export default DoublingExtras;
