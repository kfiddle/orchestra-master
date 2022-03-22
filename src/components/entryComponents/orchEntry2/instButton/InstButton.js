import styles from "./InstButton.module.css";

const InstButton = (props) => {
  const primaryPart = props.instrument;
  const rank = props.rank;

  const showDoublings = () => {
    console.log(primaryPart);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={showDoublings}>
          {primaryPart} {rank}
        </button>
      </div>
    </div>
  );
};

export default InstButton;
