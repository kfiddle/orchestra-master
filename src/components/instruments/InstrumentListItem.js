import { useState } from "react";

import classes from './InstrumentListItem.module.css';

const InstrumentListItem = (props) => {
  const [clicked, setClicked] = useState(false);

  // const { id, name } = props.instrument;
  const name = props.instrument;

  const outerContainerClass = clicked
    ? classes.clickedItem
    : classes.instrumentItemDiv;

  const clickHandler = () => {
    setClicked((previous) => !previous);
    !clicked ? props.clickedInstrument(props.instrument) : props.unclickedInstrument(props.instrument);
  };
  return (
    <div onClick={clickHandler} className={outerContainerClass}>
      <div className={classes.nameDiv}>{name}</div>
    </div>
  );
};

export default InstrumentListItem;
