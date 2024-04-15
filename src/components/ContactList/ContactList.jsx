import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);
  const isloggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isloggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isloggedIn]);

  return (
    <ul className={styles.listContacts}>
      {filteredList.map((user) => (
        <li key={user.id} className={styles.listItem}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
