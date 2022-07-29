import styles from "./Adjuster.module.css";

const Adjuster = ({ section, count }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.sectionDiv}>{section}</div>
    </div>
  );
};

export default Adjuster;
