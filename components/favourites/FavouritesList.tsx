import ContactItem from "../contactItem/ContactItem";
import { Contact, ListOfFavourites } from "../contacts/Contact";
import React, { useState } from "react";
import { ListWrapper } from "../contacts/ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";

export default function FavouritesList({ favourites }: ListOfFavourites) {
  const [searchTerm, setSearchTerm] = useState("");
  const get_data = (data: any) => {
    setSearchTerm(data);
  };

  return (
    <>
      <SearchInput setSearchTerm={get_data} />
      <ListWrapper>
        {favourites
          .filter((favourite: Contact) => {
            if (searchTerm === "") {
              return favourite;
            } else if (
              favourite.firstName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return favourite;
            }
          })
          .map((f) => {
            return (
              <ContactItem
                key={f.id}
                id={f.id}
                firstName={f.firstName}
                email={f.email}
                lastName={f.lastName}
                profilePhoto={f.profilePhoto}
                favourite={false}
                phones={f.phones}
              />
            );
          })}
      </ListWrapper>
    </>
  );
}
