import { useState, useEffect } from "react";
import InstrumentListItem from "./InstrumentListItem";

import GetAList from "../helperFunctions/GetAList";

import styles from "./InstrumentsDropDown.module.css";
const InstrumentsDropDown = (props) => {
  const [instrumentsList, setInstrumentsList] = useState([]);

  const showOrHide = props.showOrHide;
  const displayStyleObject = !showOrHide? {display: 'none'} : {};

  useEffect(() => {
    const getInstruments = async () => {
      const allInstrumentsResponse = await GetAList("get-all-instruments");
      setInstrumentsList(allInstrumentsResponse);
    };

    getInstruments();
  }, []);

  const listToDisplay = instrumentsList.map((instrument) => (
    <InstrumentListItem
      key={instrument.id}
      instrument={instrument}
    ></InstrumentListItem>
  ));

  return (
    <div className={styles.outerContainer} style={displayStyleObject}>
      <ul>{listToDisplay}</ul>
    </div>
  );
};

export default InstrumentsDropDown;
