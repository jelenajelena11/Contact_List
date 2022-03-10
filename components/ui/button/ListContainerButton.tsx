import React, { useState } from "react";
import { BtnLine, Button, ButtonContainer } from "./ListContainerButton.styled";
import { Line } from "../../contacts/ContactList.styled";
import Link from "next/link";
export default function ListContainerButton() {
  const [textColor, setTextColor] = useState("#c5e5e8");
  const [isActive, setIsActive] = useState(false);
  const setColor = () => {
    setIsActive(true);
    setTextColor(isActive ? "black" : "#c5e5e8");
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={setColor} style={{ color: textColor }}>
          <Link href="/">All contacts</Link>
        </Button>
        <BtnLine />
        <Button onClick={setColor} style={{ color: textColor }}>
          <Link href="/favourites">Favourites</Link>
        </Button>
      </ButtonContainer>
      <Line />
    </>
  );
}
