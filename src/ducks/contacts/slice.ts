import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "../../types/dto/ContactDto";
import { GroupContactsDto } from "../../types/dto/GroupContactsDto";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query() {
        return {
          url: "/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json",
        };
      },
    }),
    getContactsGroups: builder.query<GroupContactsDto[], void>({
      query() {
        return {
          url: "/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json",
        };
      },
    }),
  }),
});
