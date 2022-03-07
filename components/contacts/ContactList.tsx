import ContactItem from "../contactItem/ContactItem";
import { Contact } from "./Contact";
import React from "react";
import { Line, ListWrapper } from "./ContactList.styled";
import ListContainer from "../layout/listContainer/ListContainer";
import SearchInput from "../ui/searchInput/SearchInput";
import { ListItem } from "../contactItem/ContactItem.styled";
import Router, { useRouter } from "next/router";

export default function ContactList({ contacts }: any) {
  const router = useRouter();

  function newItem() {
    router.push("/addNew");
  }
  return (
    <>
      {/* <ListContainer /> */}
      <Line />
      <SearchInput />
      <ListWrapper>
        <ListItem onClick={newItem}>add</ListItem>
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
