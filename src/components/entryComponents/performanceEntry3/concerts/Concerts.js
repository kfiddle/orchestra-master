import Horloge from "../horloge/Horloge";
import styles from "./Concerts.module.css";

const Concerts = ({ num }) => {
  const displayableConcerts = [];
  for (let int = 0; int < num; int++) {
    displayableConcerts.push(
      <Horloge
        key={displayableConcerts.length}
        label={"Concert"}
        event={"CONCERT"}
      />
    );
  }

  return <div>{displayableConcerts}</div>;
};

export default Concerts;
