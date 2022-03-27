import styles from "./FamilyBox.module.css";

const FamilyBox = (props) => {
  const familyLabel = props.familyLabel;
  const alternateClicked = props.alternateClicked;

  const alternateClickHandler = () => {
    alternateClicked(familyLabel);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.familyDiv}>
        <div className={styles.label} onClick={alternateClickHandler}>
          {familyLabel}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default FamilyBox;
