import { useContext } from "react";

import InstrumentsList from "../../store/instruments-list";

import classes from "./InstrumentListItem.module.css";

const InstrumentListItem = (props) => {
  const { instrumentToList, clickedInstrumentList } =
    useContext(InstrumentsList);

  const name = props.instrument;

  let outerContainerClass = classes.instrumentItemDiv;
  let transformVar = 0;
  let innerNameShift = 0;

  for (let instr of clickedInstrumentList) {
    if (instr === props.instrument) {
      outerContainerClass = classes.clickedItem;
      transformVar = 6 - (clickedInstrumentList.indexOf(instr)*2);
      innerNameShift = 5;
    }
  }

  const clickHandler = () => {
    instrumentToList(props.instrument);
  };

  return (
    <div
      onClick={clickHandler}
      className={outerContainerClass}
      style={{ transform: `translateX(-${transformVar}rem)` }}
    >
      <div className={classes.nameDiv} style={{ marginLeft:`${innerNameShift}rem` }}>{name}</div>
    </div>
  );
};

export default InstrumentListItem;
