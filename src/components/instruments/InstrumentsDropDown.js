import { useState, useEffect } from "react";
import InstrumentListItem from "./InstrumentListItem";

import GetAList from "../helperFunctions/GetAList";
import useGetAList2 from '../../hooks/useGetAList2';

import styles from "./InstrumentsDropDown.module.css";

const InstrumentsDropDown = (props) => {
  const showOrHide = props.showOrHide;
  const displayStyleObject = !showOrHide ? { display: "none" } : {};

  const instrumentsList = useGetAList2('get-all-parts');

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
