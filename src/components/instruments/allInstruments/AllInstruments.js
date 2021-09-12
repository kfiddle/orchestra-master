import { useEffect } from "react";
import InstrumentListItem from "../InstrumentListItem";

const AllInstruments = (props) => {
  const clickedInstrument = (instrument) => {
    props.clickedInstrument(instrument);
  };

  const listToDisplay = props.list.map((instrument) => (
    <InstrumentListItem
      key={Math.random()}
      instrument={instrument}
      clickedInstrument={clickedInstrument}
    ></InstrumentListItem>
  ));

  return <ul>{listToDisplay}</ul>;
};

export default AllInstruments;
