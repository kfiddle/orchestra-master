import { useContext } from "react";

import InstrumentsList from '../../store/instruments-list';

import classes from './InstrumentListItem.module.css';

const InstrumentListItem = (props) => {
  
  const { instrumentToList, clickedInstrumentList } =
    useContext(InstrumentsList);
  const name = props.instrument.name;

  let outerContainerClass = classes.instrumentItemDiv;

  for (let instr of clickedInstrumentList) {
    if (instr === name) {
      outerContainerClass = classes.clickedItem
    }
  }

  const clickHandler = () => {
    instrumentToList(name)
  };

  return (
    <div onClick={clickHandler} className={outerContainerClass}>
      <div className={classes.nameDiv}>{name}</div>
    </div>
  );
};

export default InstrumentListItem;
