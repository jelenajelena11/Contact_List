import ContactItem from "../contactItem/ContactItem";
import { Contact, ContactsList } from "./Contact";
import React from "react";
import { ListWrapper, Tag } from "./ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";
import { ListItem } from "../contactItem/ContactItem.styled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactList({ contacts }: ContactsList) {
  return (
    <>
      <SearchInput />
      <ListWrapper>
        <ListItem>
          <Link href="/addNew">
            <Tag>
              <FontAwesomeIcon
                icon={faPlus}
                style={{ width: "18px", height: "18px" }}
              />
              Add new
            </Tag>
          </Link>
        </ListItem>
        {contacts.map((contact: Contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            profilePhoto={contact.profilePhoto}
            email={contact.email}
            favourite={false}
            phones={contact.phones}
          />
        ))}
      </ListWrapper>
    </>
  );
}
