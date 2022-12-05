import { NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import {
  GiBlackBook,
  GiMusicalKeyboard,
  GiDramaMasks,
  GiViolin,
} from "react-icons/gi";
import { IoMdAlert } from "react-icons/io";

import classes from "./MainNavigation.module.css";
import WarrantOfficerStripes from "./warrantOfficerStripes/WarrantOfficerStripes";
import Stripes from "./warrantOfficerStripes/Stripes";

const MainNavigation = (props) => {
  const stripesHandler = () => props.stripesHandler();

  const closeSideBar = () => props.setSideBarOpen(false);

  return (
    <header className={classes.header}>
      <div className={classes.logoDiv}>
        <Stripes
          stripesHandler={stripesHandler}
          sideBarOpen={props.sideBarOpen}
        />

        <h1>OrchMaster</h1>
      </div>
      <nav className={classes.nav}>
        <ul>
          {/* <div className={classes.newFormDiv}> */}
            <li className={classes.navItem}>
              <NavLink
                to={"/log"}
                onClick={closeSideBar}
                activeClassName={classes.active}
              >
                NOTIFICATIONS
              </NavLink>
            </li>
          {/* </div> */}

          <li className={classes.navItem}>
            <NavLink
              to={"/season"}
              onClick={closeSideBar}
              activeClassName={classes.active}
            >
              {" "}
              Season
            </NavLink>
          </li>

          <li className={classes.navItem}>
            <NavLink
              to={"library"}
              onClick={closeSideBar}
              activeClassName={classes.active}
            >
              Library
            </NavLink>
          </li>

          <li className={classes.navItem}>
            <NavLink
              to={"/contracted-players"}
              onClick={closeSideBar}
              activeClassName={classes.active}
            >
              {" "}
              Contracts
            </NavLink>
          </li>

          <li className={classes.navItem}>
            <NavLink
              to={"/sub-players"}
              onClick={closeSideBar}
              activeClassName={classes.active}
            >
              {" "}
              Subs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
