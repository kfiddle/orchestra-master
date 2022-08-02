import Inst from "./inst/Inst";

import styles from "./Insts.module.css";

const Insts = ({ insts }) => {
  const displayableInsts = insts.map((inst) => (
    <Inst key={insts.indexOf(inst)} inst={inst} />
  ));

  return <div>{displayableInsts}</div>;
};

export default Insts;
