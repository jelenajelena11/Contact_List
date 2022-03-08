import ContactItem from "../contactItem/ContactItem";
import { Contact, ListOfFavourites } from "../contacts/Contact";
import React from "react";
import { ListWrapper } from "../contacts/ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";

export default function FavouritesList({ favourites }: ListOfFavourites) {
  return (
    <>
      <SearchInput />
      <ListWrapper>
        {favourites.map((favourite: Contact) => (
          <ContactItem
            key={favourite.id}
            id={favourite.id}
            firstName={favourite.firstName}
            email={favourite.email}
            lastName={favourite.lastName}
            profilePhoto={favourite.profilePhoto}
            favourite={false}
            phones={favourite.phones}
          />
        ))}
      </ListWrapper>
    </>
  );
}
