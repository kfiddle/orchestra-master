import TextInput from "../../../../../../input/TextInput";

import styles from "./StringsNumbersBox.module.css";

const StringsNumbersBox = (props) => {
  const [stringsNumbers, setStringsNumbers] = props.stringSetters;


  return (
    <div className={styles.outerContainer}>
      <TextInput theObject={stringsNumbers} setTheObject={setStringsNumbers} label='VIOLIN 1' keyName='VIOLIN1' />
      <TextInput theObject={stringsNumbers} setTheObject={setStringsNumbers} label='VIOLIN 2' keyName='VIOLIN2'  />
      <TextInput theObject={stringsNumbers} setTheObject={setStringsNumbers} label='VIOLA' keyName='VIOLA'  />
      <TextInput theObject={stringsNumbers} setTheObject={setStringsNumbers} label='CELLO' keyName='CELLO'  />
      <TextInput theObject={stringsNumbers} setTheObject={setStringsNumbers} label='BASS' keyName='BASS'  />
    
    </div>
  );
};

export default StringsNumbersBox;
