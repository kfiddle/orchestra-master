import { useState, useEffect } from "react";

import styles from "./MovingDiv.module.css";

const MovingDiv = ({ goToSpot, opac, children }) => {
  const [position, setPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);

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
      {children}
    </div>
  );
};

export default MovingDiv;
