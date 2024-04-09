import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return <></>;
}

export default App;
