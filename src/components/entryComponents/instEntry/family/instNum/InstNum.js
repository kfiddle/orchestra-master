import { useState } from "react";

import SingleChair from "../chairs/singleChair/SingleChair";
import Chairs from "../chairs/Chairs";

import styles from "./InstNum.module.css";

const InstNum = (props) => {
  const [bracketsClicked, setBracketsClicked] = useState(false);

  const number = props.instNum;
  const specialDesignate = props.specialDesignate;
  const inst = props.inst;

  const bracketsClicker = () => {
    setBracketsClicked((previous) => !previous);
  };

  return (
    <div className={styles.outerContainer}>
      <button onClick={bracketsClicker} className={styles.button}>
        {number} {inst}
      </button>
      <div>
        <Chairs
          visible={bracketsClicked}
          inst={inst}
          num={number}
          specialDesignate={specialDesignate}
        />
      </div>
    </div>
  );
};

export default InstNum;
