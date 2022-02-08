import InstrumentButton from "./instrumentButton/InstrumentButton";

import styles from "./InstrumentButtons.module.css";

const InstrumentButtons = (props) => {
  const instrument = props.instrument;
  const number = props.number;

  const displayableInstruments = [];

  for (let j = 1; j <= number; j++) {
    displayableInstruments.push(
      <InstrumentButton instrument={instrument} rank={j} />
    );
  }

  return <div>{displayableInstruments}</div>;
};

export default InstrumentButtons;
