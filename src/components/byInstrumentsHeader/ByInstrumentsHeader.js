import { useState, useEffect } from "react";

import SubInstrument from "./SubInstrument";
import classes from "./ByInstrumentsHeader.module.css";

import GetAList from "../helperFunctions/GetAList";
import PushBasic from "../helperFunctions/pushFunctions/PushBasic";

const ByInstrumentsHeader = (props) => {
  const [listOfInstruments, setListOfInstruments] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");

  const instrumentChooser = (instrument) => {
    props.instrumentChooser(instrument);
  };

  useEffect(() => {
    const getAllInstruments = async () => {
      const allInstruments = await GetAList("get-all-instruments");
      if (allInstruments.length > 0) {
        setListOfInstruments(allInstruments);
      }
    };

    getAllInstruments();
  }, []);

  const displayableInstruments = listOfInstruments.map((instrument) => (
    <SubInstrument
      instrument={instrument}
      clicked={instrumentChooser}
      chosenInstrument={props.chosenInstrument}
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
