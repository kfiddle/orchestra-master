import { useEffect, useState } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styles from "./SingleChair.module.css";
import DoublingExtras from "../../../../../helperFunctions/DoublingExtras";
import DoubleEx from "./doubles-extras/DoubleEx";
import MovingDiv from "../../../../../UI/movingDiv/MovingDiv";

import useInstAbbreviator from "../../../../../../hooks/useInstAbbreviator";
import useAChair from "../../../../../../hooks/useAChair";

const SingleChair = ({ inst: initialInst, rank }) => {
  const [dbsExtrasClicked, setDbsExtrasClicked] = useState(false);

  const [doublings, setDoublings] = useState([]);
  const [inst, setInst] = useState(initialInst);
  const { doublingAndExtras } = DoublingExtras();


  const chair = useAChair();

  

  const displayableDoubles = doublingAndExtras[initialInst].map((extraInst) => (
    <DoubleEx
      key={extraInst + rank}
      extraInst={extraInst}
      doublings={doublings}
      setDoublings={setDoublings}
      inst={inst}
      setInst={setInst}
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

  const printedInst = useInstAbbreviator(inst);

  // const printedInst = useChairPrinter(inst, initialInst, doublings);

  return (
    <div>
      {dbsExtrasClicked && (
        <MovingDiv goToSpot={`${dbsHeight}rem`}>{displayableDoubles}</MovingDiv>
      )}

      <div
        className={`${styles.outerContainer} ${stylesToggle}`}
        onClick={showit}
      >
        {inst === initialInst ? rank : printedInst}
        <button onClick={() => console.log(doublings)}>testDbl</button>
      </div>
    </div>
  );
};

export default SingleChair;
