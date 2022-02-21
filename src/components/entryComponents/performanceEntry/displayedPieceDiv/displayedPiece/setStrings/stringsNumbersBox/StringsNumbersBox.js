import TextInput from "../../../../../../input/TextInput";

import styles from "./StringsNumbersBox.module.css";

const StringsNumbersBox = (props) => {
  const localStrings = props.localStrings;
  const setLocalStrings = props.setLocalStrings;
  const piece = props.piece;

  return (
    <div className={styles.outerContainer}>
      <TextInput
        piece={piece}
        theObject={localStrings}
        setTheObject={setLocalStrings}
        label="VIOLIN 1"
        keyName="VIOLIN1"
      />
      <TextInput
        piece={piece}
        theObject={localStrings}
        setTheObject={setLocalStrings}
        label="VIOLIN 2"
        keyName="VIOLIN2"
      />
      <TextInput
        piece={piece}
        theObject={localStrings}
        setTheObject={setLocalStrings}
        label="VIOLA"
        keyName="VIOLA"
      />
      <TextInput
        piece={piece}
        theObject={localStrings}
        setTheObject={setLocalStrings}
        label="CELLO"
        keyName="CELLO"
      />
      <TextInput
        theObject={localStrings}
        setTheObject={setLocalStrings}
        label="BASS"
        keyName="BASS"
      />
    </div>
  );
};

export default StringsNumbersBox;
