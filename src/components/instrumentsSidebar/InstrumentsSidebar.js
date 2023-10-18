import { useState, useEffect, useContext } from 'react';

import SubInst from './SubInst';

import AllInsts from '../../store/all-instruments';

import { insts } from '../../dummyData/insts';
import GetAList from '../helperFunctions/GetAList';
import PushBasic from '../helperFunctions/pushFunctions/PushBasic';

import classes from './InstrumentsSidebar.module.css';

const InstrumentsSidebar = ({ instChooser, chosenInstId }) => {
  // const { allInsts } = useContext(AllInsts);
  const allInsts = Object.values(insts);
  const [currentChoice, setCurrentChoice] = useState('');

  const instChooseHandler = (instId) => {
    instChooser(instId);
  };

  const displayableInsts = allInsts.map((inst) => (
    <SubInst inst={inst} clicked={instChooseHandler} chosenInstId={chosenInstId} key={inst.id} />
  ));

  return (
    <div className={classes.sidebar}>
      {/* <nav className={classes.nav}> */}
        <ul className={classes.ul}>{displayableInsts}</ul>
      {/* </nav> */}
    </div>
  );
};

export default InstrumentsSidebar;
