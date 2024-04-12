import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name) => {
    return contacts.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase().trim())
    );
  }
);
