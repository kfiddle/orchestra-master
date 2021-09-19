import { useState } from "react";

import classes from './SubInstrument.module.css';

const SubInstrument = (props) => {
  const name  = props.instrument;
  const active = props.active;

  const clickHandler = () => {
    props.clicked(name);
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
