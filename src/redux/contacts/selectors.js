export const selectContacts = (state) => state.contacts.items;

export const selectLoader = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;
