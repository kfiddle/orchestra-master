import { useState } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styles from "./SingleChair.module.css";
import DoublingExtras from "../../../../../helperFunctions/DoublingExtras";
import DoubleEx from "./doubles-extras/DoubleEx";
import MovingDiv from "../../../../../UI/movingDiv/MovingDiv";
import useInstAbbreviator from "../../../../../../hooks/useInstAbbreviator";

const SingleChair = (props) => {
  const [dbsExtrasClicked, setDbsExtrasClicked] = useState(false);

  const [doublings, setDoublings] = useState([]);
  const [fullInst, setFullInst] = useState("");

  const rank = props.rank;
  const inst = props.inst;

  const { doublingAndExtras } = DoublingExtras();

  const displayableDoubles = doublingAndExtras[inst].map((inst) => (
    <DoubleEx
      key={inst + rank}
      inst={inst}
      doublings={doublings}
      setDoublings={setDoublings}
      fullInst={fullInst}
      setFullInst={setFullInst}
      setDbsExtrasClicked={setDbsExtrasClicked}
    />
  ));

  const showit = () => {
    setDbsExtrasClicked((previous) => !previous);
  };

  const dbsHeight = displayableDoubles.length * -5;
  const stylesToggle = dbsExtrasClicked
    ? styles.clickedOuter
    : styles.unclickedOuter;

  const printedInst = useInstAbbreviator(fullInst);

  return (
    <div>
      {dbsExtrasClicked && (
        <MovingDiv goToSpot={`${dbsHeight}rem`}>{displayableDoubles}</MovingDiv>
      )}

      <div
        className={`${styles.outerContainer} ${stylesToggle}`}
        onClick={showit}
      >
        {fullInst === "" ? rank : printedInst}
      </div>
    </div>
  );
};

export default SingleChair;
