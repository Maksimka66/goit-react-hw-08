import { useEffect } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import { selectLoader } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

import css from "./Contacts.module.css";

const Contacts = () => {
  const load = useSelector(selectLoader);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      toast.error("This user isn`t authorized!");
    }
  }, []);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {load ? <Loader /> : <ContactList />}
    </div>
  );
};

export default Contacts;
