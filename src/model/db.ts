import Dexie, { type EntityTable } from "dexie";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const db = new Dexie("ContactsDatabase") as Dexie & {
  contact: EntityTable<ContactDto, "id">; // primary key "id" (for the typings only)
  groupContacts: EntityTable<GroupContactsDto, "id">;
  favoriteContact: EntityTable<{ id: ContactDto["id"] }, "id">;
};

// Schema declaration:
db.version(2).stores({
  contact: "id, phone, name, birthday, address, photo", // primary key "id" (for the runtime!)
  groupContacts: "id, name, description, photo, contactIds",
  favoriteContact: "id",
});

export { db };
