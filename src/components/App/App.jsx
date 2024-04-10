import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("../../pages/Home"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={ } />
        <Route path="/login" element={ }/>
        <Route path="/contacts" element={ }/>
      </Routes>
    </>
  );
}

export default App;
