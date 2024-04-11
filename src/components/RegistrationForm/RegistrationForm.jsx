import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const userNameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label className={css.fieldDescription} htmlFor={userNameId}>
          Username
        </label>
        <Field
          className={css.formItem}
          type="text"
          name="name"
          id={userNameId}
        />
        <ErrorMessage className={css.errorItem} name="name" as="span" />

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

export default RegistrationForm;
