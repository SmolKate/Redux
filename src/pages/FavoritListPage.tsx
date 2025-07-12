import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "../components/ContactCard";
import { useAppSelector } from "../ducks/hooks";

export const FavoritListPage = memo(() => {
  const contacts = useAppSelector((state) => {
    return state.contacts.contacts?.filter(({ id }) =>
      state.contacts.favoriteContacts?.includes(id)
    );
  });

  return (
    <Row xxl={4} className="g-4">
      {contacts?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
