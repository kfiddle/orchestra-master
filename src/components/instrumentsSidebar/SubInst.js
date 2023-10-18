import { useState } from 'react';

import classes from './SubInst.module.css';

const SubInst = ({ inst, clicked, chosenInstId }) => {
  const instrumentName = inst.name;

  const clickHandler = () => {
    clicked(inst.id);
  };

  const active = chosenInstId === inst.id;


  return (
    <div className={!active ? classes.partDiv : classes.highlightedDiv} onClick={clickHandler}>
      <li className={!active ? classes.partLi : classes.highlightedLi}>{instrumentName}</li>
    </div>
  );
};

export default SubInst;
