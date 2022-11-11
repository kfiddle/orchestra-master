import styles from "./Stripes.module.css";

const Stripes = () => {
  return (
    <div className={styles.outerHamburger}>
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </div>
  );
};

export default Stripes;
