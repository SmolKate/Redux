import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "../components/GroupContactsCard";
import { useGetContactsGroupsQuery } from "../ducks/contacts";

export const GroupListPage = memo(() => {
  const { data: groupContactsList } = useGetContactsGroupsQuery();

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
