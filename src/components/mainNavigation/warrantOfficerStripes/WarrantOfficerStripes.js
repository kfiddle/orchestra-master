import { useState, useReducer } from "react";
import { FaLeaf } from "react-icons/fa";

import styles from "./WarrantOfficerStripes.module.css";

const initialState = {
  bar1: "",
  bar2: "",
  bar3: "",
  clicked: false,
  spin: [0, 0, 0],
};

const barsReducer = (state, action) => {
  switch (action.type) {
    case "bar1":
      return { ...state, bar1: action.bar1 };
    case "bar2":
      return { ...state, bar2: action.bar2 };
    case "bar3":
      return { ...state, bar3: action.bar3 };
    case "clicked":
      return { ...state, clicked: action.clicked };
    case "spin":
      return { ...state, spin: action.spin };
  }
};

const WarrantOfficerStripes = ({ stripesHandler, panel }) => {
  const [barState, dispatch] = useReducer(barsReducer, initialState);

  const hovering = (up) => {
    setTimeout(() => {
      if (!up) {
        dispatch({ type: "bar1", bar1: "" });
        dispatch({ type: "clicked", clicked: false });
      } else {
        dispatch({ type: "bar1", bar1: "hover" });
      }
    }, 50);

    setTimeout(() => {
      !up
        ? dispatch({ type: "bar2", bar2: "" }) && dispatch({ type: "clicked", clicked: false })
        : dispatch({ type: "bar2", bar2: "hover" });
    }, 150);

    setTimeout(() => {
      !up
        ? dispatch({ type: "bar3", bar3: "" }) && dispatch({ type: "clicked", clicked: false })
        : dispatch({ type: "bar3", bar3: "hover" });
    }, 250);
  };

  const spinTheBars = () => {
    dispatch({ type: "clicked", clicked: true });

    for (let j = 0; j < 3; j++) {
      setTimeout(() => {
        if (j === 0) {
          dispatch({ type: "spin", spin: [0.5, 0, 0] });
        } else if (j === 1) {
          dispatch({ type: "spin", spin: [0.5, 0.5, 0] });
        } else {
          dispatch({ type: "spin", spin: [0.5, 0.5, 0.5] });
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
            className={`${styles.bar} ${styles[barState.bar1]}`}
            style={{
              top: "10px",
              transform: barState.clicked
                ? `rotate(${barState.spin[0]}turn)`
                : "",
            }}
          ></span>
          <span
            className={`${styles.bar} ${styles[barState.bar2]}`}
            style={{
              top: "26px",
              transform: barState.clicked
                ? `rotate(${barState.spin[1]}turn)`
                : "",
            }}
          ></span>
          <span
            className={`${styles.bar} ${styles[barState.bar3]}`}
            style={{
              top: "41px",
              transform: barState.clicked
                ? `rotate(${barState.spin[2]}turn)`
                : "",
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
