const PartsEnumConverter = () => {
  const partsObject = {
    PICCOLO: "Piccolo",
    FLUTE: "Flute",
    ALTOFLUTE: "Alto Flute",
    OBOE: "Oboe",
    ENGLISHHORN: "English Horn",
    OBOEDAMORE: "D'Amore",
    CLARINET: "Clarinet",
    ACLARINET: "A Clarinet",
    CCLARINET: "C Clarinet",
    EBCLARINET: "Eb Clarinet",
    BASSCLARINET: "Bass Clarinet",
    SAX: "Sax",
    BASSOON: "Bassoon",
    CONTRA: "Contra",
    HORN: "Horn",
    WAGNERTUBA: "Wagner Tuba",
    TRUMPET: "Trumpet",
    CORNET: "Cornet",
    FUGALHORN: "Fugal Horn",
    TROMBONE: "Trombone",
    BASSTROMBONE: "Bass Trombone",
    EUPHONIUM: "Euphonium",
    TUBA: "Tuba",
    TIMPANI: "Timpani",
    PERCUSSION: "Percussion",
    HARP: "Harp",
    PIANO: "Piano",
    CELESTE: "Celeste",
    GLOCKENSPIEL: "Glockenspiel",
    ORGAN: "Organ",
    KEYBOARD: "Keyboard",
    VOICES: "Voices",
    VIOLIN1: "Violin1",
    VIOLIN2: "Violin2",
    VIOLA: "Viola",
    CELLO: "Cello",
    BASS: "Bass",
  };

  const enumToString = (part) => {
    return partsObject[part];
  };

  const stringToEnum = (string) => {
    for (let key in partsObject) {
      if (partsObject[key] === string) {
        return key;
      }
    }
  };

  return { enumToString, stringToEnum };
};

export default PartsEnumConverter;
