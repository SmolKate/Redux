import { memo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { useAppSelector } from "src/redux/hooks";
import { ContactDto } from "src/types/dto/ContactDto";

export const ContactListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const groupContactsList = useAppSelector(
    (state) => state.contacts.groupContacts
  );
  const [contactsList, setContactsList] = useState<ContactDto[]>(contacts);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      );
    }

    if (fv.groupId) {
      const groupContacts = groupContactsList.find(
        ({ id }) => id === fv.groupId
      );

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
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
          {contactsList.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});
