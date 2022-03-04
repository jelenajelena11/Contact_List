import React from "react";
import { Button, ButtonContainer } from "./ListContainerButton.styled";

interface ButtonProps {
  buttonText: string;
  onClick(): void;
}

export default function ListContainerButton({
  buttonText,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer>
      <Button>{buttonText}</Button>
    </ButtonContainer>
  );
}
