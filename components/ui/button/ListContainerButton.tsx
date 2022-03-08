import React from "react";
import { Button, ButtonContainer } from "./ListContainerButton.styled";
import { Line } from "../../contacts/ContactList.styled";
import Link from "next/link";
export default function ListContainerButton() {
  return (
    <>
      <ButtonContainer>
        <Button>
          <Link href="/">All contacts</Link>
        </Button>
        <Button>
          <Link href="/favourites">Favourites</Link>
        </Button>
      </ButtonContainer>
      <Line />
    </>
  );
}
