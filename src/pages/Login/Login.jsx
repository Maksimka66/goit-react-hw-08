import { useSelector } from "react-redux";
import { selectLoader } from "../../redux/auth/selectors";
import LoginForm from "../../components/LoginForm/LoginForm";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const loader = useSelector(selectLoader);
  return <div>{loader ? <Loader /> : <LoginForm />}</div>;
};

export default Login;
