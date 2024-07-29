// src/components/MainNavigation.js
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.ul}>
          <li className="menu">
            <NavLink
              to="/MageRestaurant/Menu"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Menu
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="/MageRestaurant/Booking"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Booking
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="/MageRestaurant/Guests"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Guests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MageRestaurant"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
              end
            >
              The Mage <br /> <span>Japanese Restaurant</span>
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="/MageRestaurant/Story"
              className={({ isActive }) =>
                `${classes.link} ${isActive ? classes.active : ""}`
              }
            >
              Story
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="/MageRestaurant/Contact"
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
