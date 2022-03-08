import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 3px;
  width: 14vw;
  height: 16vh;
  margin: 0.4em;
  padding: 1em;
`;

export const Item = styled.div`
  margin: 1em auto;
  font-size: 18px;
  color: ${theme.colors.itemGray};
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
  height: 16vh;
  margin: 0.4em;
  border-style: dashed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.blueGray};
  &:hover {
    cursor: pointer;
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

export const DeleteSpan = styled.span``;
export const ButtonDiv = styled.div`
  display: flex;
`;
