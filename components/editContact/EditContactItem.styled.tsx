import styled from "styled-components";
import { theme } from "../../component-library/theme";
import {
  ContactInput,
  ContactInputNew,
} from "../../styles/common/commonAuth.styled";

export const FirstRowSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FirstRowRight = styled.span`
  display: flex;
  align-items: center;
  padding: 2em;
  color: ${theme.colors.gray};

  &:hover {
    cursor: pointer;
  }
`;

export const EditInput = styled(ContactInput)`
  :focus {
    outline: none;
  }
`;

export const EditContactInput = styled(ContactInputNew)`
  :focus {
    outline: none;
  }
`;
