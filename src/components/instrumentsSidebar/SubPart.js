import { useState } from "react";

import classes from './SubPart.module.css';

const SubPart = (props) => {
  const name  = props.part;

  const clickHandler = () => {
    props.clicked(name);
  };

  const active = props.chosenpart === props.part;

  return (
    <div
      className={!active ? classes.partDiv : classes.highlightedDiv}
      onClick={clickHandler}
    >
      <li className={!active? classes.partLi : classes.highlightedLi}>{name}</li>
    </div>
  );
};


export default SubPart;
