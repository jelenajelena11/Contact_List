import React, { useState } from "react";
import { BtnLine, Button, ButtonContainer } from "./ListContainerButton.styled";
import { Line } from "../../contacts/ContactList.styled";
import Link from "next/link";
export default function ListContainerButton() {
  const [isActive, setIsActive] = useState(false);
  const setColor = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <ButtonContainer>
        <Button>
          <Link href="/">
            <a
              onClick={setColor}
              style={{ color: isActive ? "black" : "gray" }}
            >
              All contacts
            </a>
          </Link>
        </Button>
        <BtnLine />
        <Button>
          <Link href="/favourites">
            <a
              onClick={setColor}
              style={{ color: isActive ? "black" : "gray" }}
            >
              My Favourites
            </a>
          </Link>
        </Button>
      </ButtonContainer>
      <Line />
    </>
  );
}
