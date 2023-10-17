import Inst from './Inst';

const instSorter = (inst1: Inst, inst2: Inst): number => {
  return inst1.scoreOrder - inst2.scoreOrder;
};

export default instSorter;
