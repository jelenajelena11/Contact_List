import ContactItem from "../contactItem/ContactItem";
import { Contact, ContactsList } from "./Contact";
import React, { useEffect, useState } from "react";
import { ListWrapper, Tag } from "./ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";
import { ListItem } from "../contactItem/ContactItem.styled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactList({ contacts }: ContactsList) {
  const [searchTerm, setSearchTerm] = useState("");
  const [newContacts, setNewContacts] = useState<Contact[]>([]);

  const pull_data = (data: any) => {
    setSearchTerm(data);
  };

  useEffect(() => {
    setNewContacts(JSON.parse(localStorage.getItem("contactList") || ""));
  }, []);
  return (
    <>
      <SearchInput setSearchTerm={pull_data} />
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
        {newContacts
          .filter((contact: Contact) => {
            //create new custom hook
            if (searchTerm === "") {
              return contact;
            } else if (
              contact.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return contact;
            }
          })
          .map((cont) => {
            return (
              <ContactItem
                key={cont.id}
                id={cont.id}
                firstName={cont.firstName}
                lastName={cont.lastName}
                profilePhoto={cont.profilePhoto}
                email={cont.email}
                favourite={false}
                phones={cont.phones}
              />
            );
          })}
      </ListWrapper>
    </>
  );
}
