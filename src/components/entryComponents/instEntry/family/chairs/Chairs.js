import SingleChair from "./singleChair/SingleChair";
import styles from "./Chairs.module.css";

const Chairs = (props) => {
  const inst = props.inst;
  const num = props.num;
  const specialDesignate = props.specialDesignate;

  const visible = props.visible;

  const displayableNums = [];

  for (let j = 1; j <= num; j++) {
    displayableNums.push(<SingleChair key={j} rank={j} inst={inst} />);
  }

  if (specialDesignate) {
    displayableNums.splice(
      1,
      0,
      <SingleChair key={displayableNums.length + 1} inst={inst} rank="A" />
    );
  }

  return (
    <div className={visible ? styles.outerContainer : styles.hidden}>
      {displayableNums}
    </div>
  );
};

export default Chairs;
