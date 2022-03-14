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
  color: ${theme.colors.gray};
  :focus {
    outline: none;
  }
`;

export const EditContactInput = styled(ContactInputNew)`
  color: ${theme.colors.gray};
  margin-right: 11px;
  margin-bottom: 15px;
  :focus {
    outline: none;
  }
`;

export const EditNumbersWrapper = styled.div`
  width: 100%;
`;
