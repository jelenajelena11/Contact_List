import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2.2px solid ${theme.colors.blueLine};
  padding-bottom: 1em;
  width: 33vw;
  justify-content: space-between;
`;

export const ImageWrapper = styled.img`
  border-radius: 50%;
  margin-right: 2%;
`;

export const NameHolder = styled.h2`
  color: ${theme.colors.gray};
  font-weight: ${theme.fontWeights.medium};
  align-items: flex-start;
  font-size: 28px;
  padding: 0 0.5em;
`;

export const ContactDetailsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding: 3em;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3em;
  align-items: center;
  color: ${theme.colors.strongGreen};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const LabelValue = styled.p``;

export const PhoneList = styled.p``;
