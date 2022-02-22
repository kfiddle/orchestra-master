import { useEffect } from "react";
import TextInput from "../../../../../../input/TextInput";

import styles from "./StringsNumbersBox.module.css";

const StringsNumbersBox = (props) => {
  const stringNumbers = props.stringNumbers;
  const setStringNumbers = props.setStringNumbers;
  const pieceTitle = props.pieceTitle;

  const incomingStringChairs = props.incomingStringChairs;
  const stringHashSetters = props.stringHashSetters;

  console.log(incomingStringChairs);
  const hashmapChairs = incomingStringChairs.map((chair) => (
    <TextInput
      key={incomingStringChairs.indexOf(chair)}
      pieceTitle={pieceTitle}
      stringHashSetters={stringHashSetters}
      stringNumbers={stringNumbers}
      setStringNumbers={setStringNumbers}
      chairId={chair.id}
      label={chair.parts[0]}
      keyName={chair.parts[0]}
    />
  ));

  useEffect(() => {}, []);

  return (
    <div className={styles.outerContainer}>
      {hashmapChairs}



      {/* <TextInput
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
      /> */}
    </div>
  );
};

export default StringsNumbersBox;
