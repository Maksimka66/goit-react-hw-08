import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      {!isLoggedIn && (
        <h1 className={css.title}>Register to use the phonebook</h1>
      )}
    </div>
  );
};

export default Home;
