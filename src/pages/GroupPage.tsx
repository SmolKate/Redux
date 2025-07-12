import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "../components/GroupContactsCard";
import { Empty } from "../components/Empty";
import { ContactCard } from "../components/ContactCard";
import {
  useGetContactsGroupsQuery,
  useGetContactsQuery,
} from "../ducks/contacts";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const { data: groupContactsList } = useGetContactsGroupsQuery();
  const { data: contacts } = useGetContactsQuery();

  const groupContacts = groupContactsList?.find(({ id }) => id === groupId);

  const contactsList =
    contacts?.filter(({ id }) => groupContacts?.contactIds.includes(id)) ?? [];

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});
