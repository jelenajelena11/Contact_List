import React from "react";
import ListContainerButton from "../../ui/button/ListContainerButton";
import { ListContainerWrapper } from "./ListContainer.styled";

export default function ListContainer(props: any) {
  console.log(props);
  return (
    <>
      <ListContainerWrapper>
        <ListContainerButton buttonText="All contacts" onClick={() => {}} />
        <ListContainerButton buttonText="My favourites" onClick={() => {}} />
      </ListContainerWrapper>
    </>
  );
}
