import InstrumentButton from "./instrumentButton/InstrumentButton";

import styles from "./InstrumentButtons.module.css";

const InstrumentButtons = (props) => {
  const instrument = props.instrument;
  const number = props.number;

  const chairs = props.chairs;

  console.log(chairs);
  // const displayableInstruments = [];

  const displayableInstruments = chairs.map((chair) => (
    <InstrumentButton
      key={chair.rank}
      instrument={chair.primaryPart}
      rank={chair.rank}
    />
  ));

  // for (let j = 1; j <= number; j++) {
  //   displayableInstruments.push(
  //     <InstrumentButton
  //       key={j}
  //       instrument={instrument}
  //       rank={j}
  //     />
  //   );
  // }

  return <div>{displayableInstruments}</div>;
};

export default InstrumentButtons;
