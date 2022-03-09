import styled from "styled-components";
import { theme } from "../../../component-library/theme";

export const ButtonContainer = styled.div`
  padding: 2em;
  text-align: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  margin: 2%;
  &:hover {
    cursor: pointer;
  }
`;
