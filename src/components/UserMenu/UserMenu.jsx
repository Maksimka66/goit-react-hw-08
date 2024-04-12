import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.welcomeContainer}>
      <p className={css.welcomeText}>
        {" "}
        Welcome,
        <span> {user.name}</span>
      </p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
