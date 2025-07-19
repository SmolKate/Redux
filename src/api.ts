import { GroupContactsDto } from "./types/dto/GroupContactsDto";
import { ContactDto } from "./types/dto/ContactDto";

class Api {
  async getContacts() {
    const data: Promise<ContactDto[]> = fetch(
      "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json"
    ).then((res) => res.json());

    return data;
  }

  async getContactsGroups() {
    const data: Promise<GroupContactsDto[]> = fetch(
      "https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json"
    ).then((res) => res.json());

    return data;
  }
}

export const api = new Api();
