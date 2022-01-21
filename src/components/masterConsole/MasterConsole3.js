import Performances from "./performances/Performances";

import styles from "./MasterConsole3.module.css";

//season2 has this

const MasterConsole3 = (props) => {
  const performances = props.allPerformances;

  const clickedPerformanceHandler = (performance) => {
    console.log(performance);
  };

  return (
    <div className={styles.outerContainer}>
      <Performances
        performances={performances}
        clicked={clickedPerformanceHandler}
      />
      {/* <Pieces />
      <RosterSpots />
      <Possibles /> */}
    </div>
  );
};

export default MasterConsole3;
