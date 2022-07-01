import { useState } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styles from "./SingleChair.module.css";
import DoublingExtras from "../../../../../helperFunctions/DoublingExtras";
import DoubleEx from "./doubles-extras/DoubleEx";

const SingleChair = (props) => {
  const [dbsExtrasClicked, setDbsExtrasClicked] = useState(false);
  const [doublings, setDoublings] = useState([]);

  const rank = props.rank;
  const inst = props.inst;

  const { doublingAndExtras } = DoublingExtras();

  const displayableDoubles = doublingAndExtras[inst].map((inst) => (
    <DoubleEx key={inst + rank} inst={inst} setDoublings={setDoublings} />
  ));

  const showit = () => {
    setDbsExtrasClicked((previous) => !previous);
  };

  return (
    <div>
      {dbsExtrasClicked && (
        <div className={styles.doubles}>{displayableDoubles}</div>
      )}

      <div className={styles.outerContainer} onClick={showit}>
        {rank}
      </div>
    </div>
  );
};

export default SingleChair;
