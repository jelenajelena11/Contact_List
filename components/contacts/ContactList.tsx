import ContactItem from "../contactItem/ContactItem";
import { ContactsList } from "./Contact";
import React, { useState } from "react";
import { ListWrapper, Tag } from "./ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";
import { ListItem } from "../contactItem/ContactItem.styled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useFilterData } from "../ui/searchInput/useSearchTerm";

export default function ContactList({ contacts }: ContactsList) {
  const [searchTerm, setSearchTerm] = useState("");

  const result = useFilterData(contacts, searchTerm);

  const pull_data = (data: any) => {
    setSearchTerm(data);
  };

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
        {result
          ? result.map((cont) => {
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
            })
          : contacts.map((cont) => {
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
