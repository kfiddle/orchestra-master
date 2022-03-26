import styles from "./FamilyBox.module.css";

const FamilyBox = (props) => {
  const familyLabel = props.familyLabel;
  const alternateClickHandler = () => {
    console.log("I got clicked");
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.familyDiv}>
        <div className={styles.label} onClick={alternateClickHandler}>
          {familyLabel}
        </div>
        {props.children}
      </div>
      {/* {alternateClicked && <AlternateDiv list={list} />} */}
    </div>
  );
};

export default FamilyBox;
