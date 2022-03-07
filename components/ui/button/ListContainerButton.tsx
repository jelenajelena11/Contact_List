import React from "react";
import { Button, ButtonContainer } from "./ListContainerButton.styled";
import { useRouter } from "next/router";
import { Line } from "../../contacts/ContactList.styled";
export default function ListContainerButton() {
  const router = useRouter();
  return (
    <>
      <ButtonContainer>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          All contacts
        </Button>
        <Button
          onClick={() => {
            router.push("/favourites");
          }}
        >
          Favourites
        </Button>
      </ButtonContainer>
      <Line />
    </>
  );
}
