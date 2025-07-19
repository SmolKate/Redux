import { Col, Row } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";
import { contactsStore } from "../store/contactsStore";
import { observer } from "mobx-react";

export const FavoritListPage = observer(() => {
  const favoriteContacts = contactsStore.favoriteContacts;

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
