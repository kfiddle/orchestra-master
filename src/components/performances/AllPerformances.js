import Performance from "./Performance";

import styles from "./AllPerformances.module.css";

const AllPerformances = (props) => {
  const displayablePerformances = props.list.map((performance) => (
    <Performance key={performance.id} performance={performance} />
  ));

  return <div className={styles.outerContainer}>{displayablePerformances}</div>;
};

export default AllPerformances;
