import { useState, useEffect } from "react";

// import { useMediaQuery } from "react-responsive";

import styles from "./WarrantOfficerStripes.module.css";

const WarrantOfficerStripes = ({stripesHandler, panel}) => {
  const [counter, setCounter] = useState(0);

  const [bar1, setBar1] = useState("");
  const [bar2, setBar2] = useState("");
  const [bar3, setBar3] = useState("");

  const [spin, setSpin] = useState([0, 0, 0]);
  const [clicked, setClicked] = useState(false);

//   const isMobile = useMediaQuery({ maxWidth: 767 });


  const hovering = (up) => {
    setTimeout(() => {
      if (!up) {
        setBar1("");
        setClicked(false);
      } else {
        setBar1("hover");
      }
    }, 50);

    setTimeout(() => {
      !up ? setBar2("") && setClicked(false) : setBar2("hover");
    }, 150);

    setTimeout(() => {
      !up ? setBar3("") && setClicked(false) : setBar3("hover");
    }, 250);
  };

  const spinTheBars = () => {
    setClicked(true);

    for (let j = 0; j < 3; j++) {
      setTimeout(() => {
        if (j === 0) {
          setSpin((previous) => [previous[j] + 0.5, previous[1], previous[2]]);
        } else if (j === 1) {
          setSpin((previous) => [previous[0], previous[j] + 0.5, previous[2]]);
        } else {
          setSpin((previous) => [previous[0], previous[1], previous[j] + 0.5]);
        }
      }, j * 70);
    }
  };

  const stripesClicked = () => {
    spinTheBars();
    stripesHandler();
  };

  return (
    <div
      className={styles.outerHamburger}
      onMouseEnter={() => {
        hovering(true);
      }}
      onMouseLeave={() => {
        hovering(false);
      }}
      onClick={stripesClicked}
    >
      <div className={styles.barsAndLabel}>
        <div className={styles.bars}>
          <span
            className={`${styles.bar} ${styles[bar1]}`}
            style={{
              top: "10px",
              transform: clicked ? `rotate(${spin[0]}turn)` : "",
            }}
          ></span>
          <span
            className={`${styles.bar} ${styles[bar2]}`}
            style={{
              top: "26px",
              transform: clicked ? `rotate(${spin[1]}turn)` : "",
            }}
          ></span>
          <span
            className={`${styles.bar} ${styles[bar3]}`}
            style={{
              top: "41px",
              transform: clicked ? `rotate(${spin[2]}turn)` : "",
            }}
          ></span>
        </div>
        {/* <h3
          className={styles.menuLabel}
        //   style={{ fontSize: isMobile ? ".75rem" : "1rem" }}
        style={{ fontSize: "1rem" }}

        >
          {!panel ? "HOME" : panel}
        </h3> */}
      </div>
    </div>
  );
};

export default WarrantOfficerStripes;
