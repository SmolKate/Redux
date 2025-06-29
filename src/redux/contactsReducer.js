import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";

const initialState = {
  contacts: DATA_CONTACT,
  favoriteContact: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ],
  groupContacts: DATA_GROUP_CONTACT,
};

export const contactsReducer = (state = initialState, action) => {
  return state;
};
