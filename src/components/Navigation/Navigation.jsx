import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
        to="/"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
