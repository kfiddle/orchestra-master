import { useState } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styles from "./SingleChair.module.css";
import DoublingExtras from "../../../../../helperFunctions/DoublingExtras";
import DoubleEx from "./doubles-extras/DoubleEx";
import MovingDiv from "../../../../../UI/movingDiv/MovingDiv";

const SingleChair = (props) => {
  const [dbsExtrasClicked, setDbsExtrasClicked] = useState(false);
  const [dbsPosition, setDbsPosition] = useState(0);

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

  const dbsHeight = displayableDoubles.length * -5;

  const stylesToggle = dbsExtrasClicked? styles.clickedOuter : styles.unclickedOuter;

  return (
    <div>
      {dbsExtrasClicked && (
        <MovingDiv goToSpot={`${dbsHeight}rem`}>{displayableDoubles}</MovingDiv>
      )}

      <div className={`${styles.outerContainer} ${stylesToggle}`} onClick={showit}>
        {rank}
      </div>
    </div>
  );
};

export default SingleChair;
