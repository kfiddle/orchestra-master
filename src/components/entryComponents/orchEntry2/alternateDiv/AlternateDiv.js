import { useContext, useEffect, useState } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import InstButton from "../instButton/InstButton";
import styles from "./AlternateDiv.module.css";

const AlternateDiv = (props) => {
  const { primariesObject, setPrimariesObject } = useContext(AlternateClicked);
  const [displayableInsts, setDisplayableInsts] = useState([]);
  const [sopranos, setSopranos] = useState([]);
  const [altos, setAltos] = useState([]);
  const [tenors, setTenors] = useState([]);
  const [basses, setBasses] = useState([]);

  useEffect(() => {
    let tempSopranos = [];
    let tempAltos = [];
    let tempTenors = [];
    let tempBasses = [];

    for (let instrument in primariesObject) {
      for (let j = 1; j <= primariesObject[instrument]; j++) {
        let button = (
          <InstButton key={Math.random()} instrument={instrument} rank={j} />
        );
        if (instrument === "FLUTE" || instrument === "HORN") {
          tempSopranos.push(button);
        } else if (instrument === "OBOE" || instrument === "TRUMPET") {
          tempAltos.push(button);
        } else if (instrument === "CLARINET" || instrument === "TROMBONE") {
          tempTenors.push(button);
        } else {
          tempBasses.push(button);
        }
      }
    }

    setSopranos(tempSopranos);
    setAltos(tempAltos);
    setTenors(tempTenors);
    setBasses(tempBasses);
  }, [primariesObject]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.sopranoDiv}>{sopranos}</div>
      <div className={styles.altoDiv}>{altos}</div>
      <div className={styles.tenorDiv}>{tenors}</div>
      <div className={styles.bassDiv}>{basses}</div>
    </div>
  );
};

export default AlternateDiv;
