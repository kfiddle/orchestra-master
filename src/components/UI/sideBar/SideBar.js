import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.css";

const SideBar = ({
  playerEntryClicked,
  performanceEntryClicked,
  pieceEntryClicked,
  setSideBarOpen 
}) => {
  return (
    <nav className={styles.sideBar}>
      <li className={styles.menuOption} onClick={playerEntryClicked}>
        Add Player
      </li>
      <li className={styles.menuOption} onClick={pieceEntryClicked}>
        Add Piece
      </li>

      <li className={styles.menuOption} onClick={performanceEntryClicked}>
        Add Performance
      </li>

      <NavLink to={"/instruments"} onClick={()=>setSideBarOpen(false)} className={styles.menuOption}>
        Instrumentation Settings
      </NavLink>
    </nav>
  );
};

export default SideBar;
