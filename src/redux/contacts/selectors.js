import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoader = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, name, number) => {
    return contacts.filter(
      (user) =>
        user.name.toLowerCase().includes(name.toLowerCase().trim()) ||
        user.number.includes(number.trim())
    );
  }
);
