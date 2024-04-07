import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const valueFilter = (e) => {
    const query = e.target.value;
    dispatch(changeFilter(query.trim()));
  };

  return (
    <div className={styles.inputContainer}>
      <p className={styles.inputDescription}>Find contacts by name</p>
      <input
        className={styles.fieldToFill}
        type="text"
        name="text"
        value={nameFilter}
        onChange={valueFilter}
      />
    </div>
  );
};

export default SearchBox;
