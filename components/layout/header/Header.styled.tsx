import styled from "styled-components";
import { theme } from "../../../component-library/theme";

export const HeaderWrapper = styled.div`
  padding: 2em;
  background: linear-gradient(
    to left,
    ${theme.colors.seaBlue},
    ${theme.colors.darkTurquoise}
  );
  height: 2vh;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  color: ${theme.colors.white};
  margin: 0 auto;
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: 7px;
`;
