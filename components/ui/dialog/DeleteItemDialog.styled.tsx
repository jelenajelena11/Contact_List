import styled from "styled-components";
import { theme } from "../../../component-library/theme";

export const DialogTitle = styled.p`
  text-align: center;
  padding: 10% 0;
`;

export const CancelButton = styled.button`
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
  padding: 1em 3em;
  border: none;
  border-radius: 30px;
  width: 37%;
`;

export const DeleteButton = styled.button`
  background-color: ${theme.colors.strongBlue};
  color: ${theme.colors.white};
  padding: 1em 3em;
  border: none;
  border-radius: 30px;
  width: 37%;
`;

export const ButtonDialogWrapper = styled.div`
  display: "flex";
  justify-content: "space-between";
`;

export const DialogWrapper = styled.div``;

export const TextDialog = styled.p``;
