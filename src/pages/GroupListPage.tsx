import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppSelector } from "src/redux/hooks";

export const GroupListPage = memo(() => {
  const groupContactsList = useAppSelector(
    (state) => state.contacts.groupContacts
  );

  return (
    <Row xxl={4}>
      {groupContactsList.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
