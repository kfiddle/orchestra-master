import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InstrumentListItem from "./InstrumentListItem";

import GetAList from "../helperFunctions/GetAList";
import useGetAList2 from "../../hooks/useGetAList2";

import styles from "./InstrumentsDropDown.module.css";

const InstrumentsDropDown = (props) => {
  const showOrHide = props.showOrHide;
  const displayStyleObject = !showOrHide ? { display: "none" } : {};

  const { allInsts:instrumentsList } = useSelector((state) => state.insts);

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
