import styles from "./InstNum.module.css";

const InstNum = (props) => {
  const number = props.instNum;
  const familyName = props.familyName;
  const specialDesignate = props.specialDesignate;
  const inst = props.inst;

  if (specialDesignate) {
    console.log("got one here with " + inst);
  }

  return (
    <button key={Math.random()}>
      {number} {inst}
    </button>
  );
};

export default InstNum;
