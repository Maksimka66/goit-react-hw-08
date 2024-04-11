import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{!isLoggedIn && <p>Register to use the phonebook.</p>}</div>;
};

export default Home;
