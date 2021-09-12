import { NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { GiBlackBook, GiMusicalKeyboard } from "react-icons/gi";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Orchestra Master</h1>
      </div>
      <nav className={classes.nav}>
        <ul>
          <div className={classes.newFormDiv}>
            <li className={classes.navItem} onClick={props.playerEntryClicked}>
              <FaUserPlus />
            </li>
            <li
              className={classes.navItem}
              onClick={props.pieceEntryClicked}
              style={{ marginRight: "3rem" }}
            >
              <GiBlackBook />
            </li>

            <li
              className={classes.navItem}
              onClick={props.instrumentEntryClicked}
              style={{ marginRight: "7rem" }}
            >
              <GiMusicalKeyboard />
            </li>



          </div>

          <li className={classes.navItem}>
            <NavLink to={"/purposes"} activeClassName={classes.active}>
              {" "}
              Subs
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to={"/contracted-players"} activeClassName={classes.active}>
              {" "}
              Contract Players
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink to={"/payees"} activeClassName={classes.active}>
              {" "}
              Season
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
