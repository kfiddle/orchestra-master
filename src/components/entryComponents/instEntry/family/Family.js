import styles from "./Family.module.css";

const Family = (props) => {
  const familyName = props.family;

  return (
    <div className={styles.familyDiv}>
      <label className={styles.label}>{familyName}</label>
      <input className={styles.input}></input>
    </div>
  );
};

export default Family;
