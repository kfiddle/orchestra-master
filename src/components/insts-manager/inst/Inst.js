import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import styles from "./Inst.module.css";
import InstEditor from "./InstEditor";

const Inst = ({ inst }) => {
  const [editorOpen, setEditorOpen] = useState(false);

  const editorHandler = (onOrOff) => {
    setEditorOpen(onOrOff);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.nameDiv}>{inst.name}</div>
      <div className={styles.abbrevDiv}>{inst.abbreviation}</div>
      <div className={styles.iconDiv}>
        <FiEdit className={styles.icon} onClick={() => editorHandler(true)} />
      </div>

      {editorOpen && (
        <InstEditor inst={inst} closeModal={() => editorHandler(false)} />
      )}
    </div>
  );
};

export default Inst;
