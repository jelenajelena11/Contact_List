import ContactItem from "../contactItem/ContactItem";
import { ListOfFavourites } from "../contacts/Contact";
import React, { useState } from "react";
import { ListWrapper } from "../contacts/ContactList.styled";
import SearchInput from "../ui/searchInput/SearchInput";
import { useFilterData } from "../ui/searchInput/useSearchTerm";

export default function FavouritesList({ favourites }: ListOfFavourites) {
  const [searchTerm, setSearchTerm] = useState("");
  const get_data = (data: any) => {
    setSearchTerm(data);
  };
  const result = useFilterData(favourites, searchTerm);

  return (
    <>
      <SearchInput setSearchTerm={get_data} />
      <ListWrapper>
        {result
          ? result.map((favourite) => {
              return (
                <ContactItem
                  key={favourite.id}
                  id={favourite.id}
                  firstName={favourite.firstName}
                  lastName={favourite.lastName}
                  profilePhoto={favourite.profilePhoto}
                  email={favourite.email}
                  favourite={false}
                  phones={favourite.phones}
                />
              );
            })
          : favourites.map((favourite) => {
              return (
                <ContactItem
                  key={favourite.id}
                  id={favourite.id}
                  firstName={favourite.firstName}
                  lastName={favourite.lastName}
                  profilePhoto={favourite.profilePhoto}
                  email={favourite.email}
                  favourite={false}
                  phones={favourite.phones}
                />
              );
            })}
      </ListWrapper>
    </>
  );
}
