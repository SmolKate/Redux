import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import { Empty } from "../components/Empty";
import { contactsStore } from "../store/contactsStore";

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const contacts = contactsStore.contacts;

  const contact = contacts?.find(({ id }) => id === contactId);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
