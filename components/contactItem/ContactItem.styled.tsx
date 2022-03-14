import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 3px;
  width: 14vw;
  height: fit-content;
  margin: 0.4em;
  min-width: 150px;
  padding: 1em;
  min-height: 180px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  margin: 1em auto;
  font-size: 18px;
  color: ${theme.colors.itemGray};
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.blueGray};
  border-radius: 3px;
  padding: 2em;
  width: 14vw;
  margin: 0.4em;
  border-style: dashed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  min-height: 150px;
  color: ${theme.colors.blueGray};
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ContactIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContactImage = styled.img`
  width: 28%;
  height: 50%;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 50%;
  display: block;
  max-width: 28%;
`;

export const DeleteSpan = styled.span`
  :hover {
    cursor: pointer;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
`;

export const LinkWrap = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
