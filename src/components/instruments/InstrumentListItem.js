import { useState } from "react";

import classes from './InstrumentListItem.module.css';

const InstrumentListItem = (props) => {
  const [clicked, setClicked] = useState(false);

  const { id, name } = props.instrument;

  const outerContainerClass = clicked
    ? classes.clickedItem
    : classes.instrumentItemDiv;

  const clickedInstrument = () => {
    setClicked((previous) => !previous);
    !clicked ? props.clicked(props.instrument) : props.unclick(props.instrument);
  };
  return (
    <div onClick={clickedInstrument} className={outerContainerClass}>
      <div className={classes.nameDiv}>{name}</div>
    </div>
  );
};

export default InstrumentListItem;
