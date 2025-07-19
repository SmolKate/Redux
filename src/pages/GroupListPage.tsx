import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "../components/GroupContactsCard";
import { contactsStore } from "../store/contactsStore";
import { observer } from "mobx-react";

export const GroupListPage = observer(() => {
  const groupContactsList = contactsStore.groupContactsList;

  return (
    <Row xxl={4}>
      {groupContactsList?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
