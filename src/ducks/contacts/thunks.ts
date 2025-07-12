import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const contactsList = createAsyncThunk(
  "contacts/contactsList",
  async () => {
    const data: ContactDto[] = await fetch(
      "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json"
    ).then((res) => res.json());
    return data;
  }
);

export const contactsGroups = createAsyncThunk(
  "contacts/contactsGroups",
  async () => {
    const data: GroupContactsDto[] = await fetch(
      "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json"
    ).then((res) => res.json());
    return data;
  }
);
