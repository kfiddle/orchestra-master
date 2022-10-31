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

const MainNavigation = (props) => {

  const stripesHandler = () => props.stripesHandler();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <WarrantOfficerStripes stripesHandler={stripesHandler}/>
        <h1>OrchMaster</h1>
      </div>
      <nav className={classes.nav}>
        <ul>
          <div className={classes.newFormDiv}>
            <li className={classes.navItem}>
              <NavLink to={"/log"} activeClassName={classes.active}>
                <IoMdAlert className={classes.icon} />
              </NavLink>
            </li>
            <li className={classes.navItem} onClick={props.playerEntryClicked}>
              <FaUserPlus className={classes.icon} />
            </li>

            <li className={classes.navItem}>
              <NavLink to={"/instruments"} activeClassName={classes.active}>
                <GiViolin className={classes.icon} />
              </NavLink>
            </li>
            <li
              className={classes.navItem}
              onClick={props.pieceEntryClicked}
              style={{ marginRight: "3rem" }}
            >
              <GiBlackBook className={classes.icon} />
            </li>

            <li
              className={classes.navItem}
              onClick={props.performanceEntryClicked}
              style={{ marginRight: "7rem" }}
            >
              <GiDramaMasks className={classes.icon} />
            </li>
          </div>

          <li className={classes.navItem}>
            <NavLink to={"/season"} activeClassName={classes.active}>
              {" "}
              Season
            </NavLink>
          </li>

          <li className={classes.navItem}>
            <NavLink to={"library"} activeClassName={classes.active}>
              Library
            </NavLink>
          </li>

          <li className={classes.navItem}>
            <NavLink
              to={"/contracted-players"}
              activeClassName={classes.active}
            >
              {" "}
              Contract Roster
            </NavLink>
          </li>

          <li className={classes.navItem}>
            <NavLink to={"/sub-players"} activeClassName={classes.active}>
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
