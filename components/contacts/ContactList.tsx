import ContactItem from "../contactItem/ContactItem";
import { Contact } from "./Contact";
import React from "react";
import { Line, ListWrapper } from "./ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";
import { ListItem } from "../contactItem/ContactItem.styled";
import { useRouter } from "next/router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactList({ contacts }: any) {
  const router = useRouter();

  function newItem() {
    router.push("/addNew");
  }
  return (
    <>
      <SearchInput />
      <ListWrapper>
        <ListItem onClick={newItem}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ width: "18px", height: "18px" }}
          />
          Add new
        </ListItem>
        {contacts.map((contact: Contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            profilePhoto={contact.profilePhoto}
            onClick={() => {}}
          />
        ))}
      </ListWrapper>
    </>
  );
}
