import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
