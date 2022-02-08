import InstrumentButton from "./instrumentButton/InstrumentButton";

import styles from "./InstrumentButtons.module.css";

const InstrumentButtons = (props) => {
  const chairs = props.chairs;
  const setter = props.setter;
const allParts = props.allParts;

  const displayableInstruments = chairs.map((chair) => (
    <InstrumentButton
      key={chair.rank}
      chair={chair}
      setter={setter}
      allParts={allParts}

      // instrument={chair.primaryPart}
      // rank={chair.rank}
      // doubles={chair.doublesObjects}
    />
  ));

  return <div>{displayableInstruments}</div>;
};

export default InstrumentButtons;
