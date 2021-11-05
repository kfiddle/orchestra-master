import { useContext, useEffect, useState } from "react";

import InstrumentsList from "../../../store/instruments-list";

import classes from "./ExtraType.module.css";

const violins = ["Section", "Associate", "Principal", "Concertmaster"];
const otherStrings = ["Section", "Associate", "Principal"];
const horns = ["Principal", "Assistant", "Second", "Third", "Fourth"];
const trumpets = ["Principal", "Assistant", "Second", "Third"];
const allElse = ["Section", "Associate", "Principal"];

const ExtraTypeBox = (props) => {
  const { clickedInstrumentList } = useContext(InstrumentsList);
  const [whichContracts, setWhichContracts] = useState([]);
  const contracted = props.contracted;

  useEffect(() => {
    if (clickedInstrumentList.length > 0) {
      if (clickedInstrumentList[0].name === "Violin") {
        setWhichContracts(violins);
      } else if (clickedInstrumentList[0].name === "Trumpet") {
        setWhichContracts(trumpets);
      } else if (clickedInstrumentList[0].name === "Horn") {
        setWhichContracts(horns);
      } else if (
        clickedInstrumentList[0].name === "Viola" ||
        clickedInstrumentList[0].name === "Cello" ||
        clickedInstrumentList[0].name === "Bass"
      ) {
        setWhichContracts(otherStrings);
      } else {
        setWhichContracts(allElse);
      }
      console.log(clickedInstrumentList[0].name);
    }
  }, [clickedInstrumentList]);

  const displayableContracts = whichContracts.map((contract) => (
    <button
      key={whichContracts.indexOf(contract)}
      className={classes.contractButton}
      type={'button'}
    >
      {contract}
    </button>
  ));

  const subBox = (
    <div className={classes.subBox}>
      <button className={classes.subButton} type={'button'}>A</button>
      <button className={classes.subButton} type={'button'}>B</button>
      <button className={classes.subButton} type={'button'}>C</button>
      <button className={classes.subButton} type={'button'}>D</button>
    </div>
  );

  const contractBox = (
    <div className={classes.contractBox}>
      {displayableContracts}

      {/* <button className={classes.contractButton}>Principal</button>
      <button className={classes.contractButton}>Assistant</button>
      <button className={classes.contractButton}>Section</button> */}
    </div>
  );

  return <div>{contracted ? contractBox : subBox}</div>;
};

export default ExtraTypeBox;
