import { useState, useEffect } from "react";
import InstrumentListItem from "./InstrumentListItem";

import GetAList from "../helperFunctions/GetAList";

import styles from "./InstrumentsDropDown.module.css";
const InstrumentsDropDown = (props) => {
  const [instrumentsList, setInstrumentsList] = useState([]);
  
  useEffect(() => {
    const getInstruments = async () => {
      const allInstruments = await GetAList("get-all-instrument-enums");
      setInstrumentsList(allInstruments);
    };

    getInstruments();
  }, []);

  const listToDisplay = instrumentsList.map((instrument) => (
    <InstrumentListItem
      key={Math.random()}
      instrument={instrument}
    ></InstrumentListItem>
  ));

  return (
    <div className={styles.outerContainer}>
      <ul>{listToDisplay}</ul>
    </div>
  );
};

export default InstrumentsDropDown;
