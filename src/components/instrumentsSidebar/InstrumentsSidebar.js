import { useState, useEffect, useContext } from "react";

import SubPart from "./SubPart";

import AllInstruments from "../../store/all-instruments";
import GetAList from "../helperFunctions/GetAList";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./InstrumentsSidebar.module.css";

const InstrumentsSidebar = (props) => {
  const { instrumentsList } = useContext(AllInstruments);
  const [currentChoice, setCurrentChoice] = useState("");

  const partChooser = (part) => {
    props.partChooser(part);
  };

  const displayableParts = instrumentsList.map((part) => (
    <SubPart
      part={part}
      clicked={partChooser}
      chosenpart={props.chosenPart}
      key={Math.random()}
    />
  ));

  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>{displayableParts}</ul>
      </nav>
    </div>
  );
};

export default InstrumentsSidebar;
