import { DATA_CONTACT, DATA_GROUP_CONTACT } from "src/__data__";
import { db } from "./db";

export const addMockDataIntoDB = async () => {
  const contacts = await db.contact.toArray();
  const groupContacts = await db.groupContacts.toArray();
  const favoriteContacts = await db.favoriteContact.toArray();

  if (contacts.length === 0) {
    DATA_CONTACT.forEach(
      async ({ id, phone, name, birthday, address, photo }) => {
        try {
          await db.contact.add({
            id,
            phone,
            name,
            birthday,
            address,
            photo,
          });
        } catch (error) {
          console.log(`Failed to add ${name}: ${error}`);
        }
      }
    );
  }

  if (groupContacts.length === 0) {
    DATA_GROUP_CONTACT.forEach(
      async ({ id, name, description, photo, contactIds }) => {
        try {
          await db.groupContacts.add({
            id,
            name,
            description,
            photo,
            contactIds,
          });
        } catch (error) {
          console.log(`Failed to add ${name}: ${error}`);
        }
      }
    );
  }
  if (favoriteContacts.length === 0) {
    const favoriteContact = [0, 1, 2, 3];
    favoriteContact.forEach(async (id) => {
      try {
        await db.favoriteContact.add({ id: DATA_CONTACT[id].id });
      } catch (error) {
        console.log(`Failed to add ${DATA_CONTACT[id].name}: ${error}`);
      }
    });
  }
};
