import ContactItem from "../contactItem/ContactItem";
import { Contact } from "./Contact";
import React from "react";
import { ListWrapper } from "./ContactList.styled";
import ListContainer from "../layout/listContainer/ListContainer";

export default function ContactList({ contacts }: any) {
  return (
    <>
      <ListContainer />
      <ListWrapper>
        {contacts.map((contact: Contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            onClick={() => {}}
          />
        ))}
      </ListWrapper>
    </>
  );
}
