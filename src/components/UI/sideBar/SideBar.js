import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.css";

const SideBar = ({
  playerEntryClicked,
  performanceEntryClicked,
  pieceEntryClicked,
}) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.menuOption} onClick={playerEntryClicked}>
        Add Player
      </div>
      <div className={styles.menuOption} onClick={pieceEntryClicked}>
        Add Piece
      </div>

      <div className={styles.menuOption} onClick={performanceEntryClicked}>
        Add Performance
      </div>
      <NavLink to={"/instruments"} activeClassName={styles.active}>
        <div className={styles.menuOption}>Instrumentation Settings</div>
      </NavLink>
    </div>
  );
};

export default SideBar;
