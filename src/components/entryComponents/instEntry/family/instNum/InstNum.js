import styles from "./InstNum.module.css";

const InstNum = (props) => {
  const number = props.instNum;
  const familyName = props.familyName;

  return (
    <button key={Math.random()}>
      {number} {familyName}
    </button>
  );
};

export default InstNum;
