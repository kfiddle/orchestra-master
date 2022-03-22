import styles from "./Family.module.css";

const Family = (props) => {
  const instrumentFamily = props.instrumentFamily;

  return (
    <div className={styles.familyDiv}>
      <div className={styles.label}>{instrumentFamily}</div>
      {props.children}
    </div>
  );
};

export default Family;
