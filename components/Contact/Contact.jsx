import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

import styles from "./Contact.module.css";

const Contact = ({ user: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.itemContainer}>
        <p className={styles.userInfo}>{name}</p>
        <p className={styles.userInfo}>{number}</p>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
