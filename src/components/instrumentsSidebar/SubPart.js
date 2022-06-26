import { useState } from "react";

import classes from './SubPart.module.css';

const SubPart = (props) => {
  const instrument  = props.instrument;
  const instrumentName = instrument.name;

  const clickHandler = () => {
    props.clicked(instrument);
  };

  const active = props.chosenpart === instrumentName;

  return (
    <div
      className={!active ? classes.partDiv : classes.highlightedDiv}
      onClick={clickHandler}
    >
      <li className={!active? classes.partLi : classes.highlightedLi}>{instrumentName}</li>
    </div>
  );
};


export default SubPart;
