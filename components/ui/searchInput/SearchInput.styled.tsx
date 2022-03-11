import styled from "styled-components";
import { theme } from "../../../component-library/theme";

export const InputWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InputField = styled.input`
  border: 1px solid ${theme.colors.lighterBlue};
  width: 40vw;
  padding: 1.5em;
  border-radius: 3px;
  margin: 5em auto;
  padding-left: 65px;
  box-shadow: 0px 11px 30px ${theme.colors.lighterBlue};
  :focus {
    border: 1px solid ${theme.colors.lighterBlue};
    outline: none;
    box-shadow: 0px 18px 40px ${theme.colors.lighterBlue};
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const IconSpan = styled.span`
  color: ${theme.colors.loopGray};
  position: absolute;
  bottom: 43%;
  display: block;
  left: 28%;
  width: 20px;
  @media (max-width: 425px) {
    left: 6%;
  }
`;
