import ContactItem from "../contactItem/ContactItem";
import { Contact } from "../contacts/Contact";
import React from "react";
import { ListWrapper } from "../contacts/ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";

export default function FavouritesList({ favourites }: any) {
  return (
    <>
      <SearchInput />
      <ListWrapper>
        {favourites.map((favourite: Contact) => (
          <ContactItem
            key={favourite.id}
            id={favourite.id}
            firstName={favourite.firstName}
            lastName={favourite.lastName}
            profilePhoto={favourite.profilePhoto}
            onClick={() => {}}
          />
        ))}
      </ListWrapper>
    </>
  );
}
