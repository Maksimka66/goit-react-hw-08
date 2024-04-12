import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filters/selectors";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);

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
