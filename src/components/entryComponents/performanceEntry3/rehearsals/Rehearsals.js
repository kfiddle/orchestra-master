import Horloge from "../horloge/Horloge";

import styles from "./Rehearsals.module.css";

const Rehearsals = ({ num, deleter }) => {
  const displayableRehearsals = [];
  for (let int = 0; int < num; int++) {
    displayableRehearsals.push(
      <Horloge
        key={displayableRehearsals.length}
        label={"Rehearsal"}
        event={"REHEARSAL"}
        deleter={deleter}
        index={int}
      />
    );
  }

  return <div className={styles.rehearsalsDiv}>{displayableRehearsals}</div>;
};

export default Rehearsals;
