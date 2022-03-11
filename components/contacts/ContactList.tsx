import ContactItem from "../contactItem/ContactItem";
import { Contact, ContactsList } from "./Contact";
import React, { useEffect, useState } from "react";
import { ListWrapper, Tag } from "./ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";
import { ListItem } from "../contactItem/ContactItem.styled";
import Link from "next/link";
import { useFilterData } from "../ui/searchInput/useSearchTerm";
import Plus from "../ui/icons/Plus";
import { fetchData } from "../../mock/fetchData";

export default function ContactList({ contacts, onDataUpdated }: ContactsList) {
  const [searchTerm, setSearchTerm] = useState("");
  const result = useFilterData(contacts, searchTerm);

  const onFavoriteClick = (id: any) => {
    const contacts = fetchData();
    const contact = contacts.find((contact: Contact) => contact.id === id);
    contact.favourite = !contact.favourite;
    localStorage.setItem("contactList", JSON.stringify(contacts));
    onDataUpdated();
  };

  const pull_data = (data: any) => {
    setSearchTerm(data);
  };

  useEffect(() => {
    localStorage.getItem("contactList");
  });

  return (
    <>
      <SearchInput setSearchTerm={pull_data} />
      <ListWrapper>
        <ListItem>
          <Link href="/addNew">
            <Tag>
              <Plus />
              Add new
            </Tag>
          </Link>
        </ListItem>
        {result
          ? result.map((cont) => {
              return (
                <ContactItem
                  key={cont.id}
                  contact={cont}
                  onFavoriteClick={onFavoriteClick}
                />
              );
            })
          : contacts.map((cont) => {
              return (
                <ContactItem
                  key={cont.id}
                  contact={cont}
                  onFavoriteClick={onFavoriteClick}
                />
              );
            })}
      </ListWrapper>
    </>
  );
}
