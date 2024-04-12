import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";

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

  const handleSubmit = (values, actions) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(user))
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.registrationForm}>
        <div className={css.containerForm}>
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
        </div>

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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
