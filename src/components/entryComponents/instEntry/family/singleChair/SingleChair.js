import styles from "./SingleChair.module.css";

const SingleChair = (props) => {
  const rank = props.rank;
  const inst = props.inst;

  const showit = () => {
    console.log(inst + "    " + rank);
  };
  return <button className={styles.button} onClick={showit}>{rank}</button>;
};

export default SingleChair;
