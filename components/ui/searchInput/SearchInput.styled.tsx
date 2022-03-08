import styled from "styled-components";
import { theme } from "../../../component-library/theme";

export const InputWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const InputField = styled.input`
  border: 1px solid ${theme.colors.lighterBlue};
  width: 40vw;
  padding: 1.5em;
  border-radius: 3px;
  margin: 5em auto;
  box-shadow: 0px 11px 30px ${theme.colors.lighterBlue};
`;
