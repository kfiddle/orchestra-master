import { useContext, useEffect, useState } from "react";

import AlternateClicked from "../../../../store/alternate-clicked";

import ChairsHolder from "../../../../store/chairs-holder";

import FullInstrumentation from "../../../../store/full-instrumentation";

import InstButton from "../instButton/InstButton";
import styles from "./AlternateDiv.module.css";

const AlternateDiv = (props) => {
  const { allChairs, setAllChairs } = useContext(ChairsHolder);

  const list = props.list;

  const { primariesObject, setPrimariesObject } =
    useContext(FullInstrumentation);

  const [sopranos, setSopranos] = useState([]);
  const [altos, setAltos] = useState([]);
  const [tenors, setTenors] = useState([]);
  const [basses, setBasses] = useState([]);

  useEffect(() => {
    let tempSopranos = [];
    let tempAltos = [];
    let tempTenors = [];
    let tempBasses = [];

    for (let chair of allChairs) {
      let button = (
        <InstButton
          key={allChairs.indexOf(chair)}
          instrument={chair.part}
          rank={chair.rank}
        />
      );

      if (chair.part === list[0]) {
        tempSopranos.push(button);
      } else if (chair.part === list[1]) {
        tempAltos.push(button);
      } else if (chair.part === list[2]) {
        tempTenors.push(button);
      } else if (chair.part === list[3]) {
        tempBasses.push(button);
      }
    }

    setSopranos(tempSopranos);
    setAltos(tempAltos);
    setTenors(tempTenors);
    setBasses(tempBasses);
  }, [allChairs]);

  // useEffect(() => {
  //   let tempSopranos = [];
  //   let tempAltos = [];
  //   let tempTenors = [];
  //   let tempBasses = [];

  //   for (let instrument in primariesObject) {
  //     for (let j = 1; j <= primariesObject[instrument]; j++) {
  //       let button = (
  //         <InstButton key={Math.random()} instrument={instrument} rank={j} />
  //       );
  //       if (instrument === list[0]) {
  //         tempSopranos.push(button);
  //       } else if (instrument === list[1]) {
  //         tempAltos.push(button);
  //       } else if (instrument === list[2]) {
  //         tempTenors.push(button);
  //       } else if (instrument === list[3]) {
  //         tempBasses.push(button);
  //       }
  //     }
  //   }

  //   setSopranos(tempSopranos);
  //   setAltos(tempAltos);
  //   setTenors(tempTenors);
  //   setBasses(tempBasses);
  // }, [primariesObject]);

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
