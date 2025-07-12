import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";
import { useGetContactsQuery } from "../ducks/contacts";

export const FavoritListPage = memo(() => {
  const { data: contacts } = useGetContactsQuery();
  const favoriteContacts = contacts?.slice(0, 4);

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
