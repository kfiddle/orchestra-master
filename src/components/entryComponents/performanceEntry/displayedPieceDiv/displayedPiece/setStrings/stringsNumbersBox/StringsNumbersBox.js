import { useEffect } from "react";
import TextInput from "../../../../../../input/TextInput";

import styles from "./StringsNumbersBox.module.css";

const StringsNumbersBox = (props) => {
  const stringNumbers = props.stringNumbers;
  const setStringNumbers = props.setStringNumbers;
  const pieceTitle = props.pieceTitle;

  return (
    <div className={styles.outerContainer}>
      <TextInput
        pieceTitle={pieceTitle}
        stringNumbers={stringNumbers}
        setStringNumbers={setStringNumbers}
        label="VIOLIN 1"
        keyName="VIOLIN1"
      />
      <TextInput
        pieceTitle={pieceTitle}
        stringNumbers={stringNumbers}
        setStringNumbers={setStringNumbers}
        label="VIOLIN 2"
        keyName="VIOLIN2"
      />
      <TextInput
        pieceTitle={pieceTitle}
        stringNumbers={stringNumbers}
        setStringNumbers={setStringNumbers}
        label="VIOLA"
        keyName="VIOLA"
      />
      <TextInput
        pieceTitle={pieceTitle}
        stringNumbers={stringNumbers}
        setStringNumbers={setStringNumbers}
        label="CELLO"
        keyName="CELLO"
      />
      <TextInput
        pieceTitle={pieceTitle}
        stringNumbers={stringNumbers}
        setStringNumbers={setStringNumbers}
        label="BASS"
        keyName="BASS"
      />
    </div>
  );
};

export default StringsNumbersBox;
