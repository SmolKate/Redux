import { makeAutoObservable } from "mobx";
import { api } from "../api";
import { GroupContactsDto } from "../types/dto/GroupContactsDto";
import { ContactDto } from "../types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  groupContactsList: [] as GroupContactsDto[],

  get favoriteContacts(): ContactDto[] {
    return contactsStore.contacts?.slice(0, 4);
  },

  *getContacts() {
    const result: ContactDto[] = yield api.getContacts();

    if (result) {
      contactsStore.contacts = result;
    }
  },

  *getContactsGroups() {
    const result: GroupContactsDto[] = yield api.getContactsGroups();

    if (result) {
      contactsStore.groupContactsList = result;
    }
  },
});
