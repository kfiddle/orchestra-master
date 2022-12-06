import { useState } from "react";

import { useSelector } from "react-redux";

import Inst from "./inst/Inst";
import InstAdder from "./inst/InstAdder";

import styles from "./Insts.module.css";

const Insts = () => {
  const [addInstClicked, setAddInstClicked] = useState(false);
  const { allInsts } = useSelector((state) => state.insts);

  const displayableInsts = allInsts.map((inst) => (
    <Inst key={allInsts.indexOf(inst)} inst={inst} />
  ));

  const addInstClicker = (onOrOff) => {
    setAddInstClicked(onOrOff);
  };

  return (
    <div>
      <button
        className={styles.button}
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
