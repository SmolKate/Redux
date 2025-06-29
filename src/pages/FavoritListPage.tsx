import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/redux/hooks";

export const FavoritListPage = memo(() => {
  const contacts = useAppSelector((state) =>
    state.contacts.contacts.filter(({ id }) =>
      state.contacts.favoriteContact.includes(id)
    )
  );

  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
