import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "src/redux/hooks";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const groupContacts = useAppSelector((state) =>
    state.contacts.groupContacts.find(({ id }) => id === groupId)
  );
  const contacts = useAppSelector((state) => {
    const findGroup = state.contacts.groupContacts.find(
      ({ id }) => id === groupId
    );
    if (findGroup) {
      return state.contacts.contacts.filter(({ id }) =>
        findGroup.contactIds.includes(id)
      );
    }
    return [];
  });

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
              {contacts.map((contact) => (
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
