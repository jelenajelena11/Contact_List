import styled from "styled-components";
import { theme } from "../../component-library/theme";

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2.2px solid ${theme.colors.blueLine};
  padding-bottom: 1em;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImageWrapper = styled.img`
  border-radius: 50%;
  margin-right: 2%;
  width: 200px;
  height: auto;

  @media (max-width: 425px) {
    height: auto;
    margin: 0 auto;
  }
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

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 3em 0;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3em;
  align-items: center;
  color: ${theme.colors.strongGreen};

  @media (max-width: 425px) {
    padding: 3em 0;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const InfoLabel = styled.label`
  display: flex;
  align-items: center;
  color: #7ac4cb;
`;

export const LabelValue = styled.p`
  color: #bbc4c3;
`;

export const EditBtn = styled.span`
  margin-left: 18px;

  &:hover {
    cursor: pointer;
  }
`;
