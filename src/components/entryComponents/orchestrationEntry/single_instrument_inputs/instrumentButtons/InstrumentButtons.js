import InstrumentButton from "./instrumentButton/InstrumentButton";

import styles from "./InstrumentButtons.module.css";

const InstrumentButtons = (props) => {
  const chairs = props.chairs;
  const instrument = props.instrument;
  const setter = props.setter;
  const allParts = props.allParts;

  const displayableInstruments = chairs.map((chair) => (
    <InstrumentButton
      key={chair.rank}
      chair={chair}
      setter={setter}
      allParts={allParts}
      displayedRank = {chair.displayedRank? chair.displayedRank: null}
    />
  ));

  if (instrument === "HORN") {
    let buttonToMove = displayableInstruments.pop();
    console.log(buttonToMove.chair);
    displayableInstruments.splice(1, 0, buttonToMove);
  }

  return <div>{displayableInstruments}</div>;
};

export default InstrumentButtons;
