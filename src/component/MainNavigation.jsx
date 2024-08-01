// src/components/MainNavigation.js
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.ul}>
          <li>
            <NavLink
              to="/Menu"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Booking"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Guests"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Guests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
              end
            >
              <span style={{ fontSize: "30px" }}> THE MAGE</span> <br />{" "}
              Japanese Restaurant
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Story"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Story
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
