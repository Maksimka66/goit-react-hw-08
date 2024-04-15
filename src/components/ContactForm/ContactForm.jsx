import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameId = useId();
  const numberId = useId();

  const userForm = Yup.object().shape({
    name: Yup.string()
      .min(3, <span className={styles.message}>Too short!</span>)
      .max(50, <span className={styles.message}>Too long!</span>)
      .required(<span className={styles.message}>Required!</span>),
    number: Yup.string()
      .min(3, <span className={styles.message}>Too short!</span>)
      .max(50, <span className={styles.message}>Too long!</span>)
      .required(<span className={styles.message}>Required!</span>),
  });

  const dispatch = useDispatch();
  const submitForm = (values, actions) => {
    const userInfo = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(userInfo));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={userForm}
    >
      <Form className={styles.submitForm}>
        <div className={styles.formContactContainer}>
          <label className={styles.fieldDescription} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={styles.formItem}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage className={styles.errorItem} name="name" as="span" />
        </div>

        <div className={styles.formContactContainer}>
          <label className={styles.fieldDescription} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={styles.formItem}
            type="tel"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={styles.errorItem} name="number" as="span" />
        </div>

        <button className={styles.submitContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
