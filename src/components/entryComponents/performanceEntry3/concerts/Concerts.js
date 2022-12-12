import Horloge from "../horloge/Horloge";
import styles from "./Concerts.module.css";

const Concerts = ({ num }) => {
  const displayableConcerts = [];
  for (let int = 0; int < num; int++) {
    displayableConcerts.push(
      <Horloge
        key={displayableConcerts.length}
        label={"Concert"}
        event={int === 0 ? "PRIMARYDATE" : "CONCERT"}
      />
    );
  }

  return <div className={styles.concertsDiv}>{displayableConcerts}</div>;
};

export default Concerts;
