import { useState } from "react";

import Inst from "./inst/Inst";
import InstAdder from "./inst/InstAdder";

import styles from "./Insts.module.css";

const Insts = ({ insts }) => {
  const [addInstClicked, setAddInstClicked] = useState(false);

  const displayableInsts = insts.map((inst) => (
    <Inst key={insts.indexOf(inst)} inst={inst} />
  ));

  const addInstClicker = (onOrOff) => {
    setAddInstClicked(onOrOff);
  };

  return (
    <div>
      <button
        className={styles.addInstButton}
        onClick={() => addInstClicker(true)}
      >
        ADD INSTRUMENT
      </button>
      {displayableInsts}
      {addInstClicked && <InstAdder closeModal={() => addInstClicker(false)} />}
    </div>
  );
};

export default Insts;
