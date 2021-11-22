import { useState, useEffect } from "react";

import SubPart from "./SubPart";

import GetAList from "../helperFunctions/GetAList";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

import classes from "./InstrumentsSidebar.module.css";

const InstrumentsSidebar = (props) => {
  const [listOfParts, setListOfParts] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");

  const partChooser = (part) => {
    props.partChooser(part);
  };

  useEffect(() => {

    // const getAllInstruments = async () => {
    //   const allInstruments = await GetAList("get-all-instruments");
    //   if (allInstruments.length > 0) {
    //     setListOfInstruments(allInstruments);
    //   }
    // };

    const getAllParts = async () => {
      const allParts = await GetAList("get-all-parts");
      if (allParts.length > 0) {
        setListOfParts(allParts);
      }
    };



    // getAllInstruments();
    getAllParts();


  }, []);

  const displayableParts = listOfParts.map((part) => (
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
