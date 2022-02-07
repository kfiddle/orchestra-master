import InstrumentButton from "./instrumentButton/InstrumentButton";

import styles from "./InstrumentButtons.module.css";

const InstrumentButtons = (props) => {
  const instrument = props.instrument;
  const number = props.number;

  //   const displayableInstruments =

  return <div>{instrument} {number}</div>;
};

export default InstrumentButtons;
