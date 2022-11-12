import { useState } from "react";

import styles from "./Stripes.module.css";

const Stripes = ({ stripesHandler }) => {
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const hovered = (truFalse) => {
    return () => setHovering(truFalse);
  };

  const stripeOnHover = (stripeNum) => {
    return !hovering
      ? styles[`bar${stripeNum}`]
      : `${styles.bar1} ${styles[`hover${stripeNum}`]}`;
  };

  const clicker = () => {
    clicked && stripesHandler();
    setClicked((previous) => !previous);
  };

  return (
    <div
      className={styles.outerHamburger}
      onMouseEnter={hovered(true)}
      onMouseLeave={hovered(false)}
      onClick={clicker}
    >
      <div className={styles.centeringBox}>
        <span className={stripeOnHover(1)}></span>
        <span className={stripeOnHover(2)}></span>
        <span className={stripeOnHover(3)}></span>
      </div>
    </div>
  );
};

export default Stripes;
