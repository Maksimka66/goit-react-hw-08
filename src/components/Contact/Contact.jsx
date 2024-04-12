import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

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
        onClick={() => {
          dispatch(deleteContact(id));
          toast.success("This contact has been deleted!");
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
