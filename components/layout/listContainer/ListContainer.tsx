import React from "react";
import ListContainerButton from "../../ui/button/ListContainerButton";
import { ListContainerWrapper } from "./ListContainer.styled";

export default function ListContainer({ setContactList, setFavourites }: any) {
  return (
    <>
      <ListContainerWrapper>
        <ListContainerButton
          buttonText="All contacts"
          onClick={() => {
            setContactList(true);
            console.log("kdmkm");
          }}
        />
        <ListContainerButton
          buttonText="My favourites"
          onClick={() => {
            setFavourites(true);
          }}
        />
      </ListContainerWrapper>
    </>
  );
}
