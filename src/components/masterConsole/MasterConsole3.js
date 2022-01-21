import Performances from "./performances/Performances";

import styles from "./MasterConsole3.module.css";

//season2 has this

const MasterConsole3 = (props) => {
  const performances = props.allPerformances;

  return (
    <div className={styles.outerContainer}>
      <Performances performances={performances}/>
      {/* <Pieces />
      <RosterSpots />
      <Possibles /> */}
    </div>
  );
};

export default MasterConsole3;
