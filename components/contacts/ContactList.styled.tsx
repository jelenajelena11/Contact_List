import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const ListWrapper = styled.div`
  background-color: ${theme.colors.white};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 75vw;
`;

export const Line = styled.hr`
  background-color: ${theme.colors.seaBlue};
  margin: auto;
  height: 2px;
  border-width: 0;
  width: 85vw;
`;

export const Tag = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
