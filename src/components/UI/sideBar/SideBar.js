

import styles from './SideBar.module.css';

const SideBar = () => {


  return <div className={styles.sideBar}>
    I am a sideBar
  I will have these menu items
  <div className={styles.menuOption}>Add Player</div>
  <div className={styles.menuOption}>Add Piece</div>

  <div className={styles.menuOption}>Add Performance</div>

  <div className={styles.menuOption}>Instrumentation Settings</div>
  </div>


};

export default SideBar;