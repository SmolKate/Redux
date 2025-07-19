import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";
import { FilterForm, FilterFormValues } from "../components/FilterForm";
import { ContactDto } from "../types/dto/ContactDto";
import { contactsStore } from "../store/contactsStore";
import { observer } from "mobx-react";

export const ContactListPage = observer(() => {
  const contacts = contactsStore.contacts;
  const groupContactsList = contactsStore.groupContactsList;

  const [contactsList, setContactsList] = useState<ContactDto[] | undefined>();

  useEffect(() => {
    setContactsList(contacts);
  }, [contacts, setContactsList]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] | undefined = contacts;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts?.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (fv.groupId) {
      const groupContacts = groupContactsList?.find(
        ({ id }) => id === fv.groupId
      );

      if (groupContacts) {
        findContacts = findContacts?.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        );
      }
    }
    setContactsList(findContacts);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm onSubmit={onSubmit} initialValues={{}} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contactsList?.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
