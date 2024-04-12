import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { Routes, Route } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import Layout from "../Layout/Layout";

import "./App.css";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home/Home"));
const Register = lazy(() => import("../../pages/Register/Register"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<Register />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<Login />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </Layout>
  );
}

export default App;
