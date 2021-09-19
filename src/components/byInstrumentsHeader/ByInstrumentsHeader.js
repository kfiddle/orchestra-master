import { useState, useEffect } from "react";

import SubInstrument from "./SubInstrument";
import classes from "./ByInstrumentsHeader.module.css";

import GetAList from "../helperFunctions/GetAList";

const ByInstrumentsHeader = (props) => {
  const [listOfInstruments, setListOfInstruments] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");

  const instrumentChooser = (instrumentString) => {
    props.instrumentChooser(instrumentString);
  };

  useEffect(() => {
    const getAllInstruments = async () => {
      const allInstruments = await GetAList("get-all-instrument-enums");
      if (allInstruments.length > 0) {
        setListOfInstruments(allInstruments);
      }
    };

    getAllInstruments();
  }, []);

  const displayableInstruments = listOfInstruments.map((instrument) => (
    <SubInstrument
      instrument={instrument}
      testClicked={instrument.clicked}
      clicked={instrumentChooser}
      active={currentChoice === instrument.name}
      key={instrument.id}
    />
  ));

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>{displayableInstruments}</ul>
      </nav>
    </header>
  );
};

export default ByInstrumentsHeader;
