import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    const registeredUser = {
      email: values.email,
      password: values.password,
    };
    dispatch(register(registeredUser))
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login unsuccessful!");
      });

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.loginForm}>
        <div className={css.containerForm}>
          <label className={css.fieldDescription} htmlFor={emailId}>
            Email
          </label>
          <Field
            className={css.formItem}
            type="email"
            name="email"
            id={emailId}
          />
          <ErrorMessage className={css.errorItem} name="email" as="span" />
        </div>

        <div className={css.containerForm}>
          <label className={css.fieldDescription} htmlFor={passwordId}>
            Password
          </label>
          <Field
            className={css.formItem}
            type="password"
            name="password"
            id={passwordId}
          />
          <ErrorMessage className={css.errorItem} name="password" as="span" />
        </div>

        <button className={css.submitBtn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
