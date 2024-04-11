import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        <span> {user.name}</span>
      </p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
