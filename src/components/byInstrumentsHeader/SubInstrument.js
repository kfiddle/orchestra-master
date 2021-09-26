import { useState } from "react";

import classes from './SubInstrument.module.css';

const SubInstrument = (props) => {
  const name  = props.instrument.name;
  const active = props.active;

  const clickHandler = () => {
    props.clicked(props.instrument);
  };

  return (
    <div
      className={!active ? classes.instrumentDiv : classes.highlightedDiv}
      onClick={clickHandler}
    >
      <li className={!active? classes.instrumentLi : classes.highlightedLi}>{name}</li>
    </div>
  );
};


export default SubInstrument;
