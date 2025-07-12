import { createSlice } from "@reduxjs/toolkit";
import { contactsGroups, contactsList } from "./thunks";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

interface InitialState {
  contacts?: ContactDto[];
  favoriteContacts?: FavoriteContactsDto;
  groupContacts?: GroupContactsDto[];
  isError: boolean;
}

const initialState: InitialState = {
  contacts: [],
  favoriteContacts: [],
  groupContacts: [],
  isError: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(contactsList.fulfilled.match, (state, action) => {
      const favoriteContacts = action.payload
        .slice(0, 4)
        .map((contact) => contact.id);
      state.contacts = action.payload;
      state.favoriteContacts = favoriteContacts;
      state.isError = false;
    });
    builder.addMatcher(contactsList.rejected.match, (state) => {
      state.isError = true;
    });

    builder.addMatcher(contactsGroups.fulfilled.match, (state, action) => {
      state.groupContacts = action.payload;
      state.isError = false;
    });
    builder.addMatcher(contactsGroups.rejected.match, (state) => {
      state.isError = true;
    });
  },
});
