import ContactItem from "../contactItem/ContactItem";
import { Contact } from "./Contact";
import React from "react";

export default function ContactList({ contacts }: any) {
  return (
    <>
      <p>Lista kontakata</p>
      <ul>
        {contacts.map((contact: Contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            onClick={() => {}}
          />
        ))}
      </ul>
    </>
  );
}
