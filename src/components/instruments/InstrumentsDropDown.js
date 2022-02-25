import { useState, useEffect } from "react";
import InstrumentListItem from "./InstrumentListItem";

import GetAList from "../helperFunctions/GetAList";

import styles from "./InstrumentsDropDown.module.css";

const InstrumentsDropDown = (props) => {
  const [instrumentsList, setInstrumentsList] = useState([]);
  const showOrHide = props.showOrHide;
  const displayStyleObject = !showOrHide ? { display: "none" } : {};

  useEffect(() => {
    const getAllInstruments = async () => {
      const allInstrumentsResponse = await GetAList("get-all-parts");
      setInstrumentsList(allInstrumentsResponse);
    };

    getAllInstruments();
  }, []);

  const listToDisplay = instrumentsList.map((instrument) => (
    <InstrumentListItem
      key={instrumentsList.indexOf(instrument)}
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
