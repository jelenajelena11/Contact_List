import styled from "styled-components";
import { theme } from "../../../component-library/theme";

export const DialogTitle = styled.p`
  text-align: center;
  padding: 8.5% 0;
  color: ${theme.colors.gray};
  @media (max-width: 540px) {
    padding: 8.5% 1em;
  }
`;

export const Button = styled.button`
  color: ${theme.colors.white};
  padding: 1.3em 3em;
  border: none;
  border-radius: 30px;
  width: 37%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 540px) {
    width: 100%;
  }

  @media (max-width: 280px) {
    padding: 1.3em 1em;
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${theme.colors.gray};
  @media (max-width: 540px) {
    margin-bottom: 1em;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${theme.colors.darkerTurquoise};
`;

export const ButtonDialogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 2em 2.5em;
  box-shadow: 58px 79px 6px ${theme.colors.white};
  font-size: 14px;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const DialogWrapper = styled.div``;

export const TextDialog = styled.p`
  color: ${theme.colors.gray};
  border-bottom: 2px solid ${theme.colors.colorGray};
  padding: 1.5em;
`;
