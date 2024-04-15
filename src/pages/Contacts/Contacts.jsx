import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import { selectLoader } from "../../redux/auth/selectors";

const Contacts = () => {
  const load = useSelector(selectLoader);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {load ? <Loader /> : <ContactList />}
    </div>
  );
};

export default Contacts;
