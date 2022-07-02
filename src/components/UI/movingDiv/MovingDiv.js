import { useState, useEffect } from "react";

import styles from "./MovingDiv.module.css";

const MovingDiv = (props) => {
  const [position, setPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const goToSpot = props.goToSpot;
  const opac = props.opac;

  useEffect(() => {
    setPosition(goToSpot);
    setOpacity(1);
  }, [goToSpot]);

  return (
    <div
      style={{
        transform: `translateY(${position})`,
        opacity: opacity,
        transition: "all 0.25s ease-out",
        position: "fixed",
      }}
    >
      {props.children}
    </div>
  );
};

export default MovingDiv;
